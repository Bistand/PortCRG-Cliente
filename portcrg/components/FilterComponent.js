import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const FilterComponent = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <div className="inputForm-group">
      <input
        value={value || ""}
        required
        type="text"
        autoComplete="off"
        className="border-2 rounded-md inputForm"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <label className="user-label">Buscar</label>
    </div>
  );
};
