import Banner from "../banner/Banner";
import BannerFooter from "../bannerFooter/BannerFooter";
import CommonFaqs from "../commonFAQs/CommonFaqs";
import LearningEasy from "../learningEasy/LearningEasy";
import StartJourney from "../startJourney/StartJourney";
import StudentsSay from "../studentsSay/StudentsSay";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerFooter></BannerFooter>
            <LearningEasy></LearningEasy>
            <StartJourney></StartJourney>
            <StudentsSay></StudentsSay>
            <CommonFaqs></CommonFaqs>
        </div>
    );
};

export default Home;