import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  onSearch: (value: string) => void;
}

const SearchForm = (props: Props) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    props.onSearch(search);
  };
  return (
    <div className="SearchForm" onSubmit={(e) => handleSubmit(e)}>
      <form>
        <input
          placeholder="Find by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
