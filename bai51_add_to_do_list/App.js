import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const storageJobs = JSON.parse(localStorage.getItem("jobs")); //chuyeern veef mangr
  const [jobs, setJobs] = useState(storageJobs ?? []);
  //toán tử nullish , nếu thằng đằng trc "phải là" null hoặc undifined thì nó sẽ lấy thằng đằng sau
  //toán tử || nếu thằng đằng trc là kiểu fail, '', 0, null, ...

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      //save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {/* render ra ther li */}
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
