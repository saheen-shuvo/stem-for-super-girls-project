import LatestBlog from "./PublicationsComponent/LatestBlog";
import PublicationBanner from "./PublicationsComponent/PublicationBanner";
import ShortDocumentaries from "./PublicationsComponent/ShortDocumentaries";

const Publications = () => {
    return (
        <div>
            <PublicationBanner></PublicationBanner>
            <LatestBlog></LatestBlog>
            <ShortDocumentaries></ShortDocumentaries>
        </div>
    );
};

export default Publications;