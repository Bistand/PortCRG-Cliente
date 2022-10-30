import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUsers } from "../context/userContext";

function ManagePermissions({ setIsOpen, data }) {
  const { UpdatePermissions } = useUsers();
  const [privilege, setPrivilege] = useState(3);
  const [privilegeChoice, setPrivilegeChoice] = useState(3);

  useEffect(() => {
    setPrivilege(data.privileges);
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div
        className="flex flex-row justify-between w-3/4"
        onChange={(e) => {
          setPrivilegeChoice(e.target.value);
        }}
      >
        {privilege == 1 ? (
          <>
            {" "}
            <div>
              <input type="radio" value={2} name="permissions" /> Admin
            </div>
            <div>
              <input type="radio" value={3} name="permissions" /> Estándar
            </div>{" "}
          </>
        ) : privilege == 2 ? (
          <>
            {" "}
            <div>
              <input type="radio" value={1} name="permissions" /> SuperAdmin
            </div>
            <div>
              <input type="radio" value={3} name="permissions" /> Estándar
            </div>{" "}
          </>
        ) : privilege == 3 ? (
          <>
            <div>
              <input type="radio" value={1} name="permissions" /> SuperAdmin
            </div>
            <div>
              <input type="radio" value={2} name="permissions" /> Admin
            </div>{" "}
          </>
        ) : null}
      </div>
      <div className="flex flex-row justify-end gap-2">
        <button
          className="justify-end rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none"
          onClick={() => {
            UpdatePermissions(data, privilegeChoice);
            setIsOpen(false);
          }}
        >
          Actualizar
        </button>
        <button
          className="justify-end w-1/4 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ManagePermissions;
