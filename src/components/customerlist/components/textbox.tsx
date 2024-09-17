import React from "react";

interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Ara..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
