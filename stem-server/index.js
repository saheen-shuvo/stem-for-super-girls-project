const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { ObjectId } = require("mongodb");
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://stemUser:${process.env.DB_PASS}@cluster0.42yqa.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const coursesCollection = client.db("stemDB").collection("courses");
    const enrolledCoursesCollection = client
      .db("stemDB")
      .collection("enrolledCourses");
    const usersCollection = client.db("stemDB").collection("users");
    const eventsCollection = client.db("stemDB").collection("events");
    const messagesCollection = client.db("stemDB").collection("messages");
    const reviewsCollection = client.db("stemDB").collection("reviews");

    app.get("/api/mongo-status", async (req, res) => {
      try {
        // Try to connect if not connected
        if (!client.topology || !client.topology.isConnected()) {
          await client.connect();
        }

        // Test database
        const db = client.db("stemDB");
        const collections = await db.listCollections().toArray();

        res.json({
          success: true,
          connected: true,
          database: "stemDB",
          collections: collections.map((c) => c.name),
          coursesCount: await db.collection("courses").countDocuments(),
        });
      } catch (error) {
        res.json({
          success: false,
          connected: false,
          error: error.message,
          uri: `mongodb+srv://${process.env.DB_USER}:***@cluster0.rek7dy0.mongodb.net/`,
        });
      }
    });

    // USERS API

    // GET all users
    app.get("/users/all", async (req, res) => {
      try {
        const result = await usersCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch users" });
      }
    });

    // get user role
    app.get("/users/role/:email", async (req, res) => {
      const email = req.params.email;

      const user = await usersCollection.findOne({ email });

      if (!user) {
        return res.send({ role: "user" }); // default
      }

      res.send({ role: user.role });
    });

    // post a user
    app.post("/users", async (req, res) => {
      const user = req.body;

      try {
        const exists = await usersCollection.findOne({ email: user.email });

        if (exists) {
          return res.send({ message: "User already exists" });
        }

        const result = await usersCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to save user" });
      }
    });

    // navigate based on user role
    app.get("/users", async (req, res) => {
      const email = req.query.email;
      if (!email) return res.status(400).send({ message: "Email required" });

      try {
        const user = await usersCollection.findOne({ email });
        if (!user) return res.status(404).send({ message: "User not found" });

        res.send(user);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch user" });
      }
    });

    // Delete User
    app.delete("/users/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const result = await usersCollection.deleteOne({
          _id: new ObjectId(id),
        });

        if (result.deletedCount === 1) {
          res.send({ success: true, message: "User deleted successfully" });
        } else {
          res.status(404).send({ success: false, message: "User not found" });
        }
      } catch (error) {
        res.status(500).send({ message: "Failed to delete user" });
      }
    });

    // COURSES API

    // GET all courses WITH avg rating & reviews
    app.get("/courses", async (req, res) => {
      try {
        const result = await coursesCollection
          .aggregate([
            {
              $addFields: {
                courseIdStr: { $toString: "$_id" },
              },
            },
            {
              $lookup: {
                from: "reviews",
                localField: "courseIdStr",
                foreignField: "courseId",
                as: "reviews",
              },
            },
            {
              $addFields: {
                avgRating: {
                  $cond: [
                    { $gt: [{ $size: "$reviews" }, 0] },
                    { $round: [{ $avg: "$reviews.rating" }, 1] },
                    0,
                  ],
                },
                totalReviews: { $size: "$reviews" },
              },
            },
            {
              $project: {
                reviews: 0,
                courseIdStr: 0,
              },
            },
          ])
          .toArray();

        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to fetch courses" });
      }
    });

    // DELETE a course
    app.delete("/courses/:id", async (req, res) => {
      const id = req.params.id;

      try {
        const result = await coursesCollection.deleteOne({
          _id: new ObjectId(id),
        });

        res.send({ success: true, deletedCount: result.deletedCount });
      } catch (error) {
        res.status(500).send({ message: "Failed to delete course" });
      }
    });

    // POST add a course
    app.post("/courses", async (req, res) => {
      try {
        const course = req.body;

        const result = await coursesCollection.insertOne(course);
        res.send({
          success: true,
          insertedId: result.insertedId,
        });
      } catch (error) {
        res.status(500).send({ message: "Failed to add course" });
      }
    });

    // Get Latest Courses
    app.get("/courses/latest", async (req, res) => {
      try {
        const result = await coursesCollection
          .find()
          .sort({ _id: -1 })
          .limit(3)
          .toArray();

        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch latest courses" });
      }
    });

    // GET a single course by ID
    app.get("/courses/:id", async (req, res) => {
      const { id } = req.params;

      try {
        const result = await coursesCollection.findOne({
          _id: new ObjectId(id),
        });

        if (!result) {
          return res.status(404).send({ message: "Course not found" });
        }

        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Invalid course ID" });
      }
    });

    // ENROLLED COURSES API

    // Get all enrollments
    app.get("/enrollments", async (req, res) => {
      try {
        const enrollments = await enrolledCoursesCollection.find().toArray();
        res.send(enrollments);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch enrollments" });
      }
    });

    // Enrolled courses collection
    app.post("/enroll", async (req, res) => {
      const enrolledCourse = req.body;

      const exists = await enrolledCoursesCollection.findOne({
        userEmail: enrolledCourse.userEmail,
        courseId: enrolledCourse.courseId,
      });

      if (exists) {
        return res.status(400).send({ message: "Already enrolled" });
      }

      const result = await enrolledCoursesCollection.insertOne({
        ...enrolledCourse,
        enrolledAt: new Date(),
      });

      res.send(result);
    });

    app.get("/my-enrolled-courses", async (req, res) => {
      const email = req.query.email;
      try {
        // Get all enrollments for the user
        const enrollments = await enrolledCoursesCollection
          .find({ userEmail: email })
          .toArray();

        // For each enrollment, fetch course details
        const coursesWithDetails = await Promise.all(
          enrollments.map(async (enroll) => {
            const course = await coursesCollection.findOne({
              _id: new ObjectId(enroll.courseId),
            });

            return {
              _id: enroll._id,
              userEmail: enroll.userEmail,
              enrolledAt: enroll.enrolledAt,
              courseId: enroll.courseId,
              title: course?.title || "Unknown Course",
              image: course?.image || "/default-course.jpg",
              lectures: course?.lectures || 0,
              quizzes: course?.quizzes || 0,
              duration: course?.duration || "00:00:00",
              progress: enroll.progress || 0,
              access: course?.access || "LIFETIME ACCESS",
            };
          }),
        );

        res.send(coursesWithDetails);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to fetch enrolled courses" });
      }
    });

    // EVENTS API

    // Get All Events
    app.get("/events", async (req, res) => {
      try {
        const events = await eventsCollection
          .find()
          .sort({ _id: -1 }) // latest first
          .toArray();

        res.send(events);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch events" });
      }
    });

    // Get Upcoming Events (next 3)
    app.get("/events/upcoming", async (req, res) => {
      try {
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

        const events = await eventsCollection
          .find({ fullDate: { $gte: today } })
          .sort({ fullDate: 1 }) // soonest first
          .limit(3)
          .toArray();

        res.send(events);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch upcoming events" });
      }
    });

    // Add New Event
    app.post("/events", async (req, res) => {
      try {
        const event = req.body;

        // Basic validation
        if (
          !event.title ||
          !event.image ||
          !event.fullDate ||
          !event.startTime ||
          !event.endTime ||
          !event.location ||
          !event.category
        ) {
          return res.status(400).send({ message: "Missing required fields" });
        }

        const result = await eventsCollection.insertOne({
          title: event.title,
          image: event.image,
          date: event.date,
          month: event.month,
          startTime: event.startTime,
          endTime: event.endTime,
          fullDate: event.fullDate,
          location: event.location,
          category: event.category,
          highlighted: event.highlighted || false,
          createdAt: new Date(),
        });

        res.send({
          success: true,
          message: "Event added successfully",
          insertedId: result.insertedId,
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Failed to add event" });
      }
    });

    // Delete Event
    app.delete("/events/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const result = await eventsCollection.deleteOne({
          _id: new ObjectId(id),
        });

        if (result.deletedCount === 1) {
          res.send({ success: true, message: "Event deleted successfully" });
        } else {
          res.status(404).send({ success: false, message: "Event not found" });
        }
      } catch (error) {
        res.status(500).send({ message: "Failed to delete event" });
      }
    });

    // MESSAGES API

    // GET all messages
    app.get("/all-messages", async (req, res) => {
      try {
        const result = await messagesCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch messages" });
      }
    });

    // Post a message
    app.post("/messages", async (req, res) => {
      try {
        const { email, message } = req.body;

        if (!email || !message) {
          return res
            .status(400)
            .send({ message: "Email and message are required" });
        }

        const newMessage = {
          email,
          message,
          createdAt: new Date(),
        };

        const result = await messagesCollection.insertOne(newMessage);
        res.send({
          success: true,
          message: "Message sent successfully",
          data: result,
        });
      } catch (error) {
        res.status(500).send({ message: "Failed to send message" });
      }
    });

    //reply to a message
    // Reply to a message
    app.patch("/messages/:id/reply", async (req, res) => {
      try {
        const { id } = req.params;
        const { reply, adminEmail } = req.body;

        if (!reply?.trim()) {
          return res.status(400).send({
            success: false,
            message: "Reply is required",
          });
        }

        const result = await messagesCollection.updateOne(
          { _id: new ObjectId(id) },
          {
            $set: {
              reply,
              adminEmail,
              repliedAt: new Date(),
            },
          },
        );

        if (result.matchedCount === 0) {
          return res.status(404).send({
            success: false,
            message: "Message not found",
          });
        }

        res.send({
          success: true,
          message: "Reply saved successfully",
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({
          success: false,
          message: "Failed to save reply",
        });
      }
    });

    // GET messages for a specific user
    app.get("/messages", async (req, res) => {
      try {
        const email = req.query.email;
        if (!email) {
          return res.status(400).send({ message: "Email is required" });
        }

        const messages = await messagesCollection
          .find({ email })
          .sort({ createdAt: -1 }) // latest first
          .toArray();

        res.send(messages);
      } catch (error) {
        res.status(500).send({ message: "Failed to fetch messages" });
      }
    });

    // REVIEWS API

    //Post a review
    app.post("/reviews", async (req, res) => {
      const review = req.body;

      if (!review?.courseId || !review?.userEmail) {
        return res.status(400).send({ message: "Invalid review data" });
      }

      const result = await reviewsCollection.insertOne(review);
      res.send(result);
    });

    //Get reviews by courseId
    app.get("/reviews/:courseId", async (req, res) => {
      const { courseId } = req.params;

      const reviews = await reviewsCollection
        .find({ courseId })
        .sort({ createdAt: -1 })
        .toArray();

      res.send(reviews);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Stem backend is running");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// module.exports = app;
