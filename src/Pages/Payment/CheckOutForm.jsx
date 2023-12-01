/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ImSpinner9 } from "react-icons/im";

import { useNavigate } from "react-router-dom";

import "./checkOutForm.css";
import LoadingBtn from "../../Components/LoadingBtn/LoadingBtn";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import {
  createPaymentIntent,
  saveEnroll,
  updateClassEnrollment,
} from "../../api/enrolls";
import { toast } from "react-hot-toast";

const CheckOutForm = ({ Class }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState(" ");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  // Create Payment Intent
  useEffect(() => {
    if (Class?.price > 0) {
      createPaymentIntent({ price: Class?.price }).then((data) => {
        setClientSecret(data.clientSecret);
      });
    }
  }, [Class]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // card data lookup (Asynchronous Network Call)
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error =>", error);
      setCardError(error.message);
    } else {
      setCardError(" ");
    }

    // processing
    setProcessing(true);

    // payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      const enrollClassInfo = {
        Class: { ...Class },
        Student: {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL,
        },
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      //  to data base
      try {
        // save enroll info
        await saveEnroll(enrollClassInfo);
        // update enrollment of class
        await updateClassEnrollment(Class);

        toast.success("Payment Successfull");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      } finally {
        navigate(-1);
      }
    } else {
      toast.error(cardError);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="mt-4 flex justify-between my-7">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          <LoadingBtn
            label={`Pay ${Class.price}$`}
            icon={ImSpinner9}
            isLoading={processing}
          />
        </button>
      </div>
    </form>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

// const App = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckOutForm />
//     </Elements>
//   );
// };

// export default App;

export default CheckOutForm;
