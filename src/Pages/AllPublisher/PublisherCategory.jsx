import ArticlesCard from "../../Components/ArticlesCard";
import Cover from "../../Components/Cover";
import useArticles from "../../Hooks/useArticles";



const PublisherCategory = ({publisher}) => {
    const [articles]=useArticles();
    const {name ,image}=publisher;
    
    console.log({articles,name})
    const publisherArticles=articles.filter(article=>article.publisher===name);

    return (
        <div className="my-20">
            {
                articles.length>0  && name &&<>
                    <Cover img={image} title={name}></Cover>                  

                    <div className="grid grid-cols-1 my-20 lg:grid-cols-2 gap-8">
                        {
                            publisherArticles.map(article=><ArticlesCard key={article._id}article={article}></ArticlesCard>)
                        }         
                    </div>
                   
                </>
            }
            
            
        </div>
    );
};

export default PublisherCategory;