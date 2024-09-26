import { AxiosError } from "axios";
import useSuperHeros from "../hooks/useSuperHeros";

export default function RQSuperHeroPage() {
  // ** declare and define component state and varables
  const { isLoading, data, error, isError, isFetching, refetch } =
    useSuperHeros();
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
      <button
        onClick={() => {
          refetch();
        }}
      >
        Fetch Super Heros Data
      </button>
      {/* {data?.map((hero: HeroType) => (
        <div key={hero.id}>
          <h2>{hero.name}</h2>
          <p>{hero.alterEgo}</p>
        </div>
      ))} */}
      {data?.map((heroName: string) => (
        <div key={heroName}>
          <h2>{heroName}</h2>
        </div>
      ))}
    </div>
  );
}
