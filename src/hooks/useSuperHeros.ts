import axios from "axios";
import { useQuery } from "react-query";
import { HeroType } from "../pages/SuperHerosPage";

const FetchSuperHeros = () => {
  return axios
    .get<HeroType[]>("http://localhost:4000/superheroes")
    .then((reponse) => reponse.data)
    .catch((err) => err);
};

const handleSuccess = (data: any) => {
  console.log("fetched data is done data ::", data);
};

const handleError = (error: any) => {
  console.log("fetched data is fialed ::", error);
};

const useSuperHeros = () => {
  return useQuery("rq-super-heros", FetchSuperHeros, {
    //cacheTime:5000 // 5000 ms
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    enabled: false,
    onSuccess: handleSuccess,
    onError: handleError,
    select: (data: HeroType[]) => {
      return data.map((ele) => ele.name);
    },
  });
};

export default useSuperHeros;
