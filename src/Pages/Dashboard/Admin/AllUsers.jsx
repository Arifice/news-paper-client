import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import Swal from "sweetalert2";
import { FaTrash, FaUsers } from "react-icons/fa";
import useUsers from "../../Home/useUsers";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {    
    const [users,refetch] =useUsers();
    const handleMakeAdmin=(user)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.patch(`/users/admin/${user._id}`)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.modifiedCount>0){
                        refetch();
                        Swal.fire({
                            title: "Success",
                            text: `${user.name} is admin now`,
                            icon: "success",
                            timer:'1500',
                            });
                    }
                }) 
            }
        }
    )}      

    

    const handleDelete=(user)=>{
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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res=>{
                        console.log(res.data);
                        if(res.data?.deletedCount>0){
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user.name} has been deleted.`,
                                icon: "success",
                                timer:'1500',
                              });
                        }
                    })
             
            }
          });

    }
    return (
        <div>
            <Helmet>
                <title>News/All users</title>
            </Helmet>   
            <div>
                <SectionTitle heading={'All Users'} subHeading={'manage'}></SectionTitle>
            </div>
            <h1 className="text-5xl text-center font-Cinzel mt-20 ">Total Users :  {users.length} </h1>
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
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,idx)=><tr className="hover text-2xl" key={user._id}>
                                <th>{idx+1}</th>
                                <td><img className="w-20 h-20 rounded-full" src={user.photoUrl} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <th>
                                    {
                                        user?.role==='admin'? 'Admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn bg-orange-600 text-white btn-ghost text-3xl btn-outline"><FaUsers></FaUsers></button>
                                    
                                    }
                                </th>
                                <th>
                                        <button onClick={()=>handleDelete(user)} className="btn bg-red-600 text-white btn-ghost text-3xl btn-outline"><FaTrash></FaTrash></button>
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

export default AllUsers;