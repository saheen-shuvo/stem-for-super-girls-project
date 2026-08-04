import OurEvents from "./Our Works Components/OurEvents";
import OurProjects from "./Our Works Components/OurProjects";
import OurServices from "./Our Works Components/OurServices";
import OurWorksBanner from "./Our Works Components/OurWorksBanner";

const OurWorks = () => {
    return (
        <div>
            <OurWorksBanner></OurWorksBanner>
            <OurProjects></OurProjects>
            <OurServices></OurServices>
            <OurEvents></OurEvents>
        </div>
    );
};

export default OurWorks;