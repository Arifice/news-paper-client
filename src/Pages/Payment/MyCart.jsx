import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { GrCheckboxSelected } from "react-icons/gr";
// import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart,refetch]=useCart(); 

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

                axiosSecure.delete(`/cart/${id}`)
                    .then(res=>{
                        console.log(res.data);
                        if(res.data?.deletedCount>0){
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `successfully deleted`,
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
            <Helmet>
                <title>News/My cart</title>
            </Helmet>
            <SectionTitle heading={'My Cart'}></SectionTitle>

            <h1 className="text-5xl text-center font-Cinzel mt-20 ">Total Item :  {cart.length} </h1>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table table-zebra-zebra m-10">
                        {/* head */}
                        <thead>
                        <tr className="bg-orange-400 text-3xl font-Cinzel">
                            <th>SL</th>
                            <th>Name</th>                            
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Confirm</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item,idx)=><tr className="hover text-2xl" key={item._id}>
                                <th>{idx+1}</th>                                
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.category}</td>
                                <td>${item.price}</td>
                                <td>
                                    {
                                        item.status==='confirmed'? <span className="text-green-600">{item.status}</span>
                                        : <span>{item?.status}</span>
                                    
                                    }   
                                </td>
                                <th>
                                {
                                    item.status!='confirmed' && <Link to={`/dashboard/payment/${item._id}`}><button  className="btn bg-orange-600 text-white btn-ghost text-3xl btn-outline"><GrCheckboxSelected></GrCheckboxSelected></button></Link>
                                }
                                </th>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="btn bg-red-600 text-white btn-ghost text-3xl btn-outline"><FaTrash></FaTrash></button>
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

export default MyCart;