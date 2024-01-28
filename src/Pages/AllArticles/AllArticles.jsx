import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllArticles = () => {
    const [isAdmin]=useAdmin();
    const {data:articles=[],refetch}=useQuery({
        queryKey:['articles'],
        queryFn:async()=>{
            const res=await axiosPublic.get('https://abc-news-server.vercel.app/articles');
            return res.data;
        }
    })
    const displayArticles=articles.filter(article=>article?.status!=='pending');

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed){
                axiosSecure.delete(`/articles/${id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data?.deletedCount>0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `article has been deleted.`,
                        icon: "success",
                        timer:1000,
                        });
                }
            })
            }        
          })
    }

    return (
        <div>
            <Helmet>
                    <title>News/All articles</title>
                </Helmet>
            <div>                
                <SectionTitle heading={'All Artoicles'}subHeading={'enjoy reading'}></SectionTitle>
            </div>
            <h1 className="text-3xl font-Cinzel font-semibold text-center">Total Articles : {articles.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    displayArticles.map(article=>(
                        <div key={article._id} className="card  bg-base-100 shadow-xl">
                            <figure><img className="w-full h-64" src={article?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{article?.title}</h2>
                                <p>{article.description.slice(0,150)}</p>
                                <div className="flex justify-evenly  mt-10">
                                   {
                                    isAdmin && <>
                                        <button onClick={()=>handleDelete(article._id)} className="text-5xl btn-warning text-warning p-3 bg-base-200"><FaTrash></FaTrash></button>
                                       <Link to={`/dashboard/updatearticle/${article._id}`}> <button className="text-5xl btn-warning text-success p-3 bg-base-200"><FaEdit></FaEdit></button></Link>
                                    </>
                                   }
                                    <Link to={`/details/${article._id}`}><button className="btn btn-ghost bg-slate-300 border-0 lg:text-3xl btn-outline border-b-4">Details</button></Link>
                                </div>
                            </div>
                            </div>
                    ))
                }

            </div>
        
        
        </div>
    );
};

export default AllArticles;