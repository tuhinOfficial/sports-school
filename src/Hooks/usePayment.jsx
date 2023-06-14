import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Prividers/AuthProvider";

const usePayment = () => {
  const { user } = useContext(AuthContext);

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["myClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://sport-school-server-tuhinofficial.vercel.app/payment?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [payments, refetch];
};

export default usePayment;
