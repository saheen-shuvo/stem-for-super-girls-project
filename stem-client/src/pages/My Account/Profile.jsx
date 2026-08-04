import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation/Loading Animation.json";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="w-24 h-24"
        />
      </div>
    );

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.photoURL || "/default-profile.png"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div>
          <h2 className="text-xl font-semibold">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">User ID</span>
          <span className="font-medium">{user.uid}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Email Verified</span>
          <span
            className={`font-medium ${
              user.emailVerified ? "text-green-600" : "text-red-500"
            }`}
          >
            {user.emailVerified ? "Verified" : "Not Verified"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Account Type</span>
          <span className="font-medium">
            {user.isAnonymous ? "Anonymous" : "Registered"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Provider</span>
          <span className="font-medium capitalize">
            {user.providerData?.[0]?.providerId}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Account Created</span>
          <span className="font-medium">
            {user?.metadata?.createdAt
              ? new Date(parseInt(user.metadata.createdAt)).toLocaleDateString()
              : "N/A"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Last Login</span>
          <span className="font-medium">
            {user?.metadata?.lastLoginAt
              ? new Date(
                  parseInt(user.metadata.lastLoginAt),
                ).toLocaleDateString()
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
