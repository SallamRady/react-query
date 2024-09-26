import axios from "axios";
import { useEffect, useState } from "react";

export default function SuperHerosPage() {
  // ** declare and define component state and variables
  const [loading, setloading] = useState(false);
  const [heros, setHeros] = useState<HeroType[]>([]);

  // ** handle side-effects
  useEffect(() => {
    fetchData();
  }, []);

  // ** declare and define component helper methods
  const fetchData = () => {
    setloading(true);
    axios
      .get<HeroType[]>("http://localhost:4000/superheroes")
      .then((response) => {
        setHeros(response.data);
      })
      .catch((err) => {})
      .finally(() => {
        setloading(false);
      });
  };

  // ** return component ui.
  if (loading) return <div>Loading.....</div>;

  return (
    <div>
      <h1>Traditional Super Heroes</h1>
      {heros?.map((hero) => (
        <div key={hero.id}>
          <h2>{hero.name}</h2>
          <p>{hero.alterEgo}</p>
        </div>
      ))}
    </div>
  );
}

export type HeroType = {
  id: number;
  name: string;
  alterEgo: string;
};
