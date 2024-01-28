import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";



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
        
            <div className="overflow-x-auto w-full">
                    <table className="table table-zebra-zebra m-10">
                        {/* head */}
                        <thead>
                        <tr className="bg-orange-400 text-3xl font-Cinzel">
                            <th>SL</th>
                            <th>Image</th>                            
                            <th>Title</th>
                            <th>Description</th>                            
                            <th>Tag</th>                            
                            <th>publisher</th>                            
                            <th>Status</th>                            
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                articles.map((article,idx)=><tr className="hover text-2xl" key={article._id}>
                                <th>{idx+1}</th>                                
                                <td className="w-24 h-24 rounded-lg"><img src={article.image} alt="" /></td>
                                <td>{article.title}</td>
                                <td>{article.description.slice(0,150)}</td>
                                <td>{article.tags}</td>
                                <td>{article.publisher}</td>
                                <td>{article.status}</td>
                                <td>
                                    {
                                        article.status==='confirmed'? <span className="text-green-600">{article.status}</span>
                                        : <span>{article?.status}</span>
                                    
                                    }   
                                </td>
                                
                                <th>
                                    <button onClick={()=>handleDelete(article._id)} className="btn bg-red-600 text-white btn-ghost text-3xl btn-outline"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                            }
                        
                        {/* row 2 */}
                        
                        
                        </tbody>
                    </table>
                </div>
        
        </div>
    );
};

export default MyArticles;