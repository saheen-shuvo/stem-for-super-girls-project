import AboutUsBanner from "./AboutUsBanner";
import CoreTeam from "./CoreTeam";
import Leadership from "./Leadership";
import MissionVision from "./MissionVision";
import OurStory from "./OurStory";
import TrainingTeam from "./TrainingTeam";

const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
            <OurStory></OurStory>   
            <MissionVision></MissionVision>    
            <Leadership></Leadership>  
            <CoreTeam></CoreTeam>
            <TrainingTeam></TrainingTeam>
        </div>
    );
};

export default AboutUs;