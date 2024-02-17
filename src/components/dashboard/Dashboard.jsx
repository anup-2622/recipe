import { useState } from "react"
import React from 'react'

const Dashboard = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [subjects, setSubjects] = useState([{ name: '', marks: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(subjects)
      // const response = await axios.post('/api/marksheet', {
      //   name,
      //   rollNumber,
      //   subjects
      // });
      // console.log(response.data);
      // You can handle success or display a success message here
    } catch (error) {
      console.error('Error submitting marksheet:', error);
      // You can handle errors here
    }
  };

  const handleSubjectChange = (index, key, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][key] = value;
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', marks: '' }]);
  };

  const removeSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  return (
    <div className="App">
      <h1>Student Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Roll Number:</label>
          <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
        </div>
        {subjects.map((subject, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Subject Name"
              value={subject.name}
              onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
            />
            <input
              type="text"
              placeholder="Marks"
              value={subject.marks}
              onChange={(e) => handleSubjectChange(index, 'marks', e.target.value)}
            />
            <button type="button" onClick={() => removeSubject(index)}>-</button>
          </div>
        ))}
        <button type="button" onClick={addSubject}>+</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Dashboard