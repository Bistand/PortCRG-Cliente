import Link from "next/link";
export const COLUMNS = [
  {
    Header: "id",
    accessor: "alpha3Code",
  },
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "capital",
    accessor: "capital",
  },
  {
    Header: "Last Name",
    accessor: "numericCode",
    Cell: (e) => (
      <Link href={"/courses/" + e.value} passHref>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Ver más
        </button>
      </Link>
    ),
  },
];
