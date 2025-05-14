import { useState } from "react";

export default function SearchBar({ data, onfilter, placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    onfilter(filtered);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        className="form-control "
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
