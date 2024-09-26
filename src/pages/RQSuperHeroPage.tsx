import axios, { AxiosError } from "axios";
import { HeroType } from "./SuperHerosPage";
import { useQuery } from "react-query";

const FetchSuperHeros = () => {
  return axios
    .get<HeroType[]>("http://localhost:4000/superheroes")
    .then((reponse) => reponse.data)
    .catch((err) => err);
};

export default function RQSuperHeroPage() {
  // ** declare and define component state and varables
  const { isLoading, data, error, isError, isFetching } = useQuery(
    "rq-super-heros",
    FetchSuperHeros,
    {
      //cacheTime:5000 // 5000 ms
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  );
  // ** declare and define component methods

  // ** return component ui
  if (isLoading) return <>Loading...</>;

  if (isFetching) return <>Data is fetching....</>;

  if (isError) {
    const axiosError = error as AxiosError;
    return <>{axiosError.message}</>;
  }

  return (
    <div>
      <h1>RQ Super Heroes</h1>
      {data?.map((hero: HeroType) => (
        <div key={hero.id}>
          <h2>{hero.name}</h2>
          <p>{hero.alterEgo}</p>
        </div>
      ))}
    </div>
  );
}
