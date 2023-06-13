import { Alert, Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Prividers/AuthProvider";
import useSports from "../../../../Hooks/useSports";
import { useLocation } from "react-router-dom";

const CheckoutFrom = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [tranSectionID, setTranSectionID] = useState("");
  const { user } = useContext(AuthContext);

  const[,refetch] = useSports();
  // const seats = item.price;
  // console.log(seats);
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
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
    console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error creating card", error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
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
      console.log(confirmError);
    }
    console.log(paymentIntent);
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

      fetch(`http://localhost:5000/payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      fetch(`http://localhost:5000/userbookmarks/${data?._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
          }
        });

      fetch(`http://localhost:5000/sports/${data?.id}`, {
        method: "PUT",
        headers:{
          "content-type": "application/json",
        },
        body:JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      })
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
