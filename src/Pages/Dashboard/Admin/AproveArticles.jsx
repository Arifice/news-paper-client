import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrash, } from "react-icons/fa";
import { MdSelectAll } from "react-icons/md";
import { GrCheckboxSelected } from "react-icons/gr";

const AproveArticles = () => {
    const {data:articles=[],refetch}=useQuery({
        queryKey:['articles'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`http://localhost:5000/articles/admin?search=pending`);
            return res.data;
        }
    })



    const handleApprove=(article)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm!"
          }).then((result) => {
            if (result.isConfirmed) {
                const status='approved'
            axiosSecure.patch(`/articles/admin/${article._id}`,{status:status})
                .then(res=>{
                    console.log(res.data);
                    if(res.data.modifiedCount>0){
                        refetch();
                        Swal.fire({
                            title: "Success",
                            text: `articale is added successfully`,
                            icon: "success",
                            timer:1000,
                            });
                    }
                }) 
            }
        }
    )}      

    

    const handleDelete=(article)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/articles/admin/${article._id}`)
                    .then(res=>{
                        console.log(res.data);
                        if(res.data?.deletedCount>0){
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Article has been deleted.`,
                                icon: "success",
                                timer:1000,
                              });
                        }
                    })
             
            }
          });

    }

    return (
        <div>
            <SectionTitle heading={'Aprove articles'} subHeading={'check'}></SectionTitle>
            <h1 className="text-3xl text-center">total pending : {articles.length}</h1>
        
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra-zebra m-10">
                        {/* head */}
                        <thead>
                        <tr className="bg-orange-400 text-3xl font-Cinzel">
                            <th>SL</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Publisher</th>
                            <th>Tag</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                articles.map((article,idx)=><tr className="hover text-2xl" key={article._id}>
                                <th>{idx+1}</th>                                
                                <td><img className="w-24 h-24 rounded-lg" src={article.image} alt="" /></td>
                                <td>{article.title}</td>
                                <td>{article.publisher}</td>
                                <td>{article.tags}</td>
                                <td className="text-sm w-32">{article.description.slice(0,70)}</td>
                                <td>{article.status}</td>
                                <th>
                                    {
                                        article?.status==='pending'? <button onClick={()=>handleApprove(article)} className="btn bg-orange-600 text-white btn-ghost text-3xl btn-outline"><GrCheckboxSelected></GrCheckboxSelected></button>
                                        :undefined
                                    }
                                </th>
                                <th>
                                        <button onClick={()=>handleDelete(article)} className="btn bg-red-600 text-white btn-ghost text-3xl btn-outline"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                            }
                        
                        {/* row 2 */}
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>
        
        
        </div>
    );
};

export default AproveArticles;