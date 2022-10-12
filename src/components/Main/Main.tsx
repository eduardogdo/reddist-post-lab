import { useEffect, useState } from "react";
import { Reddits } from "../../models/RedditResponse";
import { getReddits } from "../../services/RedditService";
import RedditList from "../RedditList/RedditList";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

const Main = () => {
  const [reddits, setReddits] = useState<Reddits[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getReddits(search).then((response) => {
      setReddits(response);
    });
  }, [search]);

  return (
    <div className="Main">
      <SearchForm onSearch={(value: string) => setSearch(value)} />
      <RedditList reddits={reddits} onSearch={setSearch} />
    </div>
  );
};

export default Main;
