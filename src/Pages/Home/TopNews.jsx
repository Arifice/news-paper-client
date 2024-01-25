import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import useArticles from "../../Hooks/useArticles";
import ArticlesCard from "../../Components/ArticlesCard";

const TopNews = () => {
    const [articles]=useArticles();
    const topNews=articles.filter(article=>article?.type=='breaking');
    return (
        <section className="my-16">
            <div className="my-16">
                <SectionTitle heading={"From Our Top News"}
                    subHeading={"Todays Top News"}>

                </SectionTitle>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                   topNews.map(article=><ArticlesCard key={article._id} article={article}></ArticlesCard>) 
                }               
            </div>
            <div className="flex justify-center">
                <Link><button className="btn btn-outline mt-16 btn-warning border-0 text-2xl lg:text-3xl font-Cinzel border-b-4">View More</button></Link>
               </div>
        </section>    
       
    );
};

export default TopNews;