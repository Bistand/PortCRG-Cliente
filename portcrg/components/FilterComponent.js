import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const FilterComponent = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <span>
      Buscar:{"  "}
      <input
        value={value || ""}
        className="border-2 rounded-md"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
