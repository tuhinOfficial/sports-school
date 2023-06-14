import { Alert, Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Prividers/AuthProvider";
import useSports from "../../../../Hooks/useSports";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutFrom = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [tranSectionID, setTranSectionID] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const[,refetch] = useSports();

  useEffect(() => {
    fetch("https://sport-school-server-tuhinofficial.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [data]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "unknown",
            email: user.email || "anonymous",
          },
        },
      });
    if (confirmError) {
    }
    setProcessing(true);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTranSectionID(transactionId);

      const payment = {
        name: user?.displayName || "anonymous",
        email: user?.email || "anonymous",
        price: data?.price,
        instructorEmail: data?.instructorEmail,
        instructorName: data?.instructorName,
        id: data?._id,
        tranSectionID: paymentIntent.id,
      };

      fetch(`https://sport-school-server-tuhinofficial.vercel.app/payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
        });

      fetch(`https://sport-school-server-tuhinofficial.vercel.app/userbookmarks/${data?._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
          }
        });

      fetch(`https://sport-school-server-tuhinofficial.vercel.app/sports/${data?.id}`, {
        method: "PUT",
        headers:{
          "content-type": "application/json",
        },
        body:JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      })

      navigate("/dashboard")

    }
  };

  return (
    <div className="my-10">
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-8">
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
        <Button
          size="md"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="mt-4 t"
        >
          Payment
        </Button>
      </form>
      {error && <p className="text-red-600 text-center">{error}</p>}
      {tranSectionID && (
        <Alert
          color="green"
          
        >
          Payment SuccessFul Transaction Id : {tranSectionID}
        </Alert>
      )}
    </div>
  );
};

export default CheckoutFrom;
