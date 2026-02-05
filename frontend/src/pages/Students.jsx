import { useEffect, useState } from "react";
import API from "../services/apiStudents";

export default function Students() {

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const loadStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

const addStudent = async () => {

  try {

    await API.post("/students", {
      name,
      age: Number(age)
    });

    setName("");
    setAge("");

    loadStudents();

  } catch (e) {

    console.log(e.response);
    alert("Add failed");

  }
};


  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div>

      <h2>Students</h2>

      <input
        placeholder="student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="student age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>

      {students.map(s => (
        <div key={s.id}>
          Name: {s.name} | Age: {s.age}
        </div>
      ))}

    </div>
  );
}
