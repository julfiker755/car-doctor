import { useQuery } from "@tanstack/react-query";
import Loading from "../Authentication/Loading/Loading";
import useAuthState from "./useAuthState";
import useAxiosintercaptor from "./useAxiosintercaptor";

const useOrdereview = () => {
    const {user}=useAuthState()
    const axiosincaptor=useAxiosintercaptor()
   const {data:orderdata,refetch,isPending}  =useQuery({
    queryKey: ['orderreview'],
    queryFn: async () => {
      const {data} = await axiosincaptor.get(`/order?email=${user?.email}`)
      return data
    },
  })
  if (isPending) {
    return <Loading></Loading>
}
return {orderdata,refetch}
};

export default useOrdereview;