import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyArticles = () => {
    const {user}=useAuth();
    const {data:articles=[],refetch}=useQuery({
        queryKey:['articles'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/articles/user/${user?.email}`);
            return res.data;
        }
    })
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
        <div >
            <Helmet>
                <title>News/My Article</title>
            </Helmet>
            <div>
                <SectionTitle heading={'MY Article'} subHeading={'manage'}></SectionTitle>
            </div>
            <h1 className="text-3xl text-center">Total Articles : {articles.length}</h1>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 py-10 gap-10">
                {
                    articles.map(article=>(
                        <div key={article._id} className="card  bg-base-100 shadow-xl">
                            <figure><img className="w-full h-64" src={article?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{article?.title}</h2>
                                <p>{article.description.slice(0,150)}</p>
                                <div className="flex justify-evenly  mt-10">
                                    <button onClick={()=>handleDelete(article._id)} className="text-5xl btn-warning text-warning p-3 bg-base-200"><FaTrash></FaTrash></button>
                                   <Link to={`/dashboard/updatearticle/${article._id}`}> <button className="text-5xl btn-warning text-success p-3 bg-base-200"><FaEdit></FaEdit></button></Link>
                                    
                                </div>
                            </div>
                            </div>
                    ))
                }

            </div>
        
        </div>
    );
};

export default MyArticles;