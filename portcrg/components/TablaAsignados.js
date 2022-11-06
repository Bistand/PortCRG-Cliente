import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { FilterComponent } from "./FilterComponent";
import { getCookie } from "cookies-next";
import DeleteEventModal from "./DeleteEventModal";
import DeleteEvent from "./DeleteEvent";
import Link from "next/link";
import UnassignCourse from "./UnassignCourse";
import useCourses from "../hooks/useCourses";
import { useEvents } from "../context/eventContext";

const TablaAsignados = ({ participantes }) => {
  console.log(participantes);
  const COLUMNS = [
    {
      Header: "DPI",
      accessor: "DPI",
    },
    {
      Header: "Participantes ",
      accessor: "nombre",
    },
    {
      Header: "Correo Electronico",
      accessor: "correo",
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const { getCoursesByUser, coursesListUser } = useCourses();
  const ObtenerCursos = async () => {
    await getCoursesByUser();
  };
  const [isOpenDel, setIsOpenDel] = useState(false);
  const [data, setData] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [token, setToken] = useState("");
  const authToken = getCookie("tokenuser");
  const { privileges } = useEvents();

  useEffect(() => {
    setData(participantes);
  }, []);

  useEffect(() => {}, []);

  // const ObtenerCursos = async (id) => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios(
  //       `https://portcrg-dev.onrender.com/api/user/courses/${id}`
  //     );
  //     setOgData(data.data);
  //     setData(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <>
      {coursesListUser.length && privileges == 1 ? (
        <>
          <div className="flex justify-end">
            <FilterComponent
              filter={globalFilter}
              setFilter={setGlobalFilter}
            ></FilterComponent>
          </div>
          <div className="m-4 md:m-0 md:mt-4 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table
                    {...getTableProps()}
                    className="min-w-full divide-y divide-gray-200"
                  >
                    <thead className="bg-gray-50">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps()}
                              scope="col"
                              className="px-4 py-2 text-left font-medium uppercase tracking-wider"
                            >
                              {column.render("Header")}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      {...getTableBodyProps()}
                      className="bg-white divide-y divide-gray-200"
                    >
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()} className="border-2 h-5">
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="px-4 py-2 whitespace-nowrap"
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="my-4 flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <div className="flex justify-between md:w-1/5 w-7/12">
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="text-blue-600 disabled:text-slate-400"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="text-blue-600 disabled:text-slate-400"
                  >
                    Siguiente
                  </button>
                </div>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[5, 10, 25].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Mostrar {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row justify-between"></div>
              <span className="">
                Página{" "}
                <strong>
                  {pageIndex + 1} de {pageOptions.length}
                </strong>{" "}
              </span>
            </div>
          </div>
        </>
      ) : privileges != 1 ? null : (
        <div className="flex flex-row justify-center">
          <h2>Cargando Participantes ...</h2>
        </div>
      )}
      <DeleteEventModal
        isOpen={isOpenDel}
        setIsOpen={setIsOpenDel}
        name={"¿Seguro que desea desasignar este curso?"}
      >
        <UnassignCourse
          setIsOpen={setIsOpenDel}
          course={courseId}
        ></UnassignCourse>
      </DeleteEventModal>
    </>
  );
};

export default TablaAsignados;
