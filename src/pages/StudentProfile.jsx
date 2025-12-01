import { useParams } from "react-router";

function StudentProfile() {
  const { studentId } = useParams();

  return (
    <div>
      <h2>Student Profile</h2>
      <p>
        You are viewing the information for ID: <strong>{studentId}</strong>
      </p>
      {/* Here you would fetch your API looking for this ID */}
    </div>
  );
}

export default StudentProfile;
