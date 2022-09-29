import React, { useState } from "react";
import Table from "../../components/Table";

function courses() {
  const [choice, setChoice] = useState(0);
  return (
    <div className="">
      <div className="flex flex-row justify-center gap-4">
        <button
          className={choice == 0 ? "underline" : ""}
          onClick={() => {
            setChoice(0);
          }}
        >
          Cursos actuales
        </button>
        <span>|</span>
        <button
          className={choice == 1 ? "underline" : ""}
          onClick={() => {
            setChoice(1);
          }}
        >
          Cursos históricos
        </button>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div>
          <Table status={choice} />
        </div>
      </div>
    </div>
  );
}

export default courses;
