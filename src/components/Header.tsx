import React from "react";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

function Header({ onSearch }: HeaderProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="w-full shadow-md">
      <div className="flex justify-between items-center mx-auto w-full max-w-[80vw] py-4 lg:max-w-[90vw]">
        <div className="cursor-pointer">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
            Pokemon
          </h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-black px-4 py-2 rounded-lg focus:outline-none"
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;