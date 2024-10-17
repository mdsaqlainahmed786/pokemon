import axios from "axios";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import Header from "./components/Header";

interface Pokemon {
  name: string;
  url: string;
}

function App() {
  const [data, setData] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setData(response.data.results);
    };
    fetchData();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 w-full max-w-[60vw] gap-2 mx-auto">
        {filteredData.map((item, index) => (
          <Card key={index} name={item.name} url={item.url} />
        ))}
      </div>
    </>
  );
}

export default App;