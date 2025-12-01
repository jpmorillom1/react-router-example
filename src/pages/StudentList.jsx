import { useSearchParams } from "react-router-dom";

const StudentList = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get("filter") || "";

  const handleSearch = (event) => {
    const text = event.target.value;
    if (text) {
      setSearchParams({ filter: text });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <h2>Students list</h2>

      <input
        value={filterValue}
        onChange={handleSearch}
        placeholder="Filtrar estudiantes..."
        style={{ padding: "8px", marginBottom: "10px" }}
      />

      <p>
        You are searching for: <strong>{filterValue}</strong>
      </p>

      {/* Aquí filtrarías tu lista real usando filterValue */}
      <ul>
        <li>Juan Pérez</li>
        <li>María Gomez</li>
      </ul>
    </div>
  );
};

export default StudentList;
