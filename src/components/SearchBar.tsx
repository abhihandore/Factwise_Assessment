import { FC, useEffect, useState } from "react";
import Input from "./Ui/Input";
import SearchSvg from "../assets/icons/SearchSvg";
import useDebounce from "../hooks/useDebounce";

type Props = {
  onSearch: (value: string) => void;
};
const SearchBar: FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    onSearch(debouncedInput);
  }, [debouncedInput, onSearch]);
  return (
    <div className="searchbar">
      <Input
        fullWidth
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        startAdornment={<SearchSvg width="20px" height="20px" />}
        placeholder="Search User"
      />
    </div>
  );
};

export default SearchBar;
