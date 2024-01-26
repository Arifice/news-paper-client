import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { FaEdit, FaTrash, } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePublisher from "../../../Hooks/usePublisher";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const ManagePublisher = () => {    
    const [publishers,refetch] =usePublisher(); 

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
            if (result.isConfirmed) {
                axiosSecure.delete(`/publishers/${id}`)
                    .then(res=>{
                        console.log(res.data);
                        if(res.data?.deletedCount>0){
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Publisher has been deleted`,
                                icon: "success",
                                timer:1000
                              });
                        }
                    })
             
            }
          });

    }
    return (
        <div>
            <Helmet>
                <title>News/All Publishers</title>
            </Helmet>   
            <div>
                <SectionTitle heading={'Manage Publishers'} subHeading={'manage'}></SectionTitle>
            </div>
            <h1 className="text-5xl text-center font-Cinzel mt-20 ">Total Publishers :  {publishers.length} </h1>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra-zebra m-10">
                        {/* head */}
                        <thead>
                        <tr className="bg-orange-400 text-3xl font-Cinzel">
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                publishers.map((publisher,idx)=><tr className="hover text-2xl" key={publisher._id}>
                                <th>{idx+1}</th>
                                <td><img className="w-20 h-20 rounded-full" src={publisher.image} alt="" /></td>
                                <td>{publisher.name}</td>
                                <td>{publisher.email}</td>
                                <th>
                                    <Link to={`/dashboard/updatepublisher/${publisher._id}`}><button  className="btn bg-orange-600 text-white btn-ghost text-3xl btn-outline"><FaEdit></FaEdit></button></Link>
                                </th>
                                <th>
                                        <button onClick={()=>handleDelete(publisher._id)} className="btn bg-red-600 text-white btn-ghost text-3xl btn-outline"><FaTrash></FaTrash></button>
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

export default ManagePublisher;