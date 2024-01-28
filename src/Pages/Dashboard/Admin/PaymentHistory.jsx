import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import usePayment from "../../../Hooks/usePayment";
import { FaTrash } from "react-icons/fa";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const [payments,refetch]=usePayment();
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

                axiosSecure.delete(`/payments/${id}`)
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
            <SectionTitle heading={'Payment History'}subHeading={'check'}></SectionTitle>
        
            <h1 className="text-3xl text-center">Total Payment : {payments.length}</h1>
        
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
                            <th>Transaction Id</th>
                            <th>date</th>
                            <th>Status</th>                            
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment,idx)=><tr className="hover text-2xl" key={payment._id}>
                                <th>{idx+1}</th>                                
                                <td>{payment.name}</td>
                                <td>{payment.email}</td>
                                <td>{payment.category}</td>
                                <td>{payment.date}</td>
                                <td>{payment.transactionId}</td>
                                <td>${payment.price}</td>

                                <td>
                                    {
                                        payment.status==='complete'? <span className="text-green-600">{payment.status}</span>
                                        : <span>{payment?.status}</span>
                                    
                                    }   
                                </td>                               
                                <th>
                                    <button onClick={()=>handleDelete(payment._id)} className="btn bg-red-600 text-white btn-ghost text-3xl btn-outline"><FaTrash></FaTrash></button>
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

export default PaymentHistory;