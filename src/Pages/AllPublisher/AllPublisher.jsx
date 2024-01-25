import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover";
import publisherimg from '../../assets/bannar/1.jpg'
import usePublisher from "../../Hooks/usePublisher";
import PublisherCategory from "./PublisherCategory";

const AllPublisher = () => {
    const [publishers]=usePublisher();
    return (
        <div>
            <Helmet>
                <title>News / Publisher</title>
            </Helmet>
            <Cover img={publisherimg} title={'Our All Publishers'}></Cover>            
            {
                publishers.map((publisher,idx)=><PublisherCategory key={idx} publisher={publisher}></PublisherCategory>)
            }
        </div>
    );
};

export default AllPublisher;