import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const CheackOut = ({ cartItem, id }) => {
  const { user } = useAuth();
  const { price } = cartItem;
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate();
  console.log({ stripe, elements });

  useEffect(() => {
    {
      if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price: price })
          .then(res => {
            console.log(res.data?.clientSecret);
            setClientSecret(res.data?.clientSecret);
          })
      }
    }
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('');
    }
    const { paymentIntent, error: cofirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        }
      }
    })
    if (cofirmError) {
      console.log(cofirmError);
      setError(cofirmError?.message);
    }
    else {
      setError('');
      console.log({ paymentIntent });
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        // now save the payment in the database
        const payment = {
          email: user?.email,
          name: user?.displayName,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(),//utc convert date ,use moment js
          cartIds: id,
          category:cartItem.category,
          status: 'complete',
        }
        console.log({ payment });
        const res = await axiosSecure.post('/payments', payment);
        console.log(res.data);

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Thank You",
            text: "Your payment successfull",
            icon: "success",
            timer: '1000'
          });

          const updateinfo={status:'confirmed'}
                  axiosSecure.patch(`/cart/${cartItem._id}`,updateinfo)
                      .then(res=>{
                          console.log(res.data);
                          if(res.data.modifiedCount>0){                              
                              Swal.fire({
                                  title: "Success",
                                  text: `Confirmation successfull`,
                                  icon: "success",
                                  timer:1000,
                                  });
                              axiosSecure.patch(`users/${user.email}`,{subscription:cartItem?.category}) 
                                  .then(res=>{
                                      console.log(res.data);
                                      
                                  })

                            navigate('/dashboard/mycart')
                       }
                      }
                      )
        }

      }
    }

  };


  return (
    <div className="py-24 px-10">
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            className="my-10   px-24"
            options={{
              style: {
                base: {
                  fontSize: '32px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <div className="flex justify-center my-20">
            <button disabled={!stripe || !elements || !clientSecret} className="btn text-3xl font-Cinzel btn-warning" type="submit">
              Pay
            </button>
          </div>
          <p className="text-2xl text-red-600 text-center mt-10">{error}</p>


        </form>
        <p className="text-2xl  text-center mt-10">Item name : {cartItem?.category} subscription <span className="ml-10"> Toatalprice: ${price}</span> </p>
        {
          transactionId && <p className="text-2xl text-green-600 text-center mt-10">Your Transaction Id : {transactionId} </p>
        }
      </div>
    </div>
  );
};

export default CheackOut;