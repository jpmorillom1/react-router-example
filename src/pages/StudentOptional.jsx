import { useParams } from "react-router";

function StudentOptional() {
  const { value } = useParams();

  return (
    <div>
      <h2>Student Optional</h2>
      <p>
        value: <strong>{value}</strong>
      </p>
      {/* Here you would fetch your API looking for this ID */}
    </div>
  );
}

export default StudentOptional;
