import Link from "next/link";
export const COLUMNS = [
  {
    Header: "Curso",
    accessor: "name",
  },
  {
    Header: "Instructor",
    accessor: "instructor",
  },
  {
    Header: "",
    accessor: "_id",
    Cell: (e) => (
      <div className="flex flex-row">
        <Link href={"/courses/" + e.value} passHref className="">
          <a className="bg-transparent hover:underline text-cadet-blue font-semibold py-1 px-4 rounded text-right w-full">
            Ver más
          </a>
        </Link>
      </div>
    ),
  },
];
