
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';

const PremiumArticles = () => {
    return (
        <div>
             <Helmet>
                <title>News/Premium articles</title>
            </Helmet>
            <div>
                <SectionTitle heading={'Premium articles'} subHeading={'manage'}></SectionTitle>
            </div>
            
        </div>
    );
};

export default PremiumArticles;