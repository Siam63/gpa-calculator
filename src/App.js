import './App.css';
import React, { useState } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import AssessmentList from './Components/AssessmentList';

function App() {
  const [gradeInput, setGradeInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [assessments, setAssessments] = useState([]);

  return (
    <div className="App">
      <Title/>
      <Form
        setAssessments={setAssessments} 
        assessments={assessments} 
        setGradeInput={setGradeInput} 
        gradeInput={gradeInput}
        weightInput={weightInput}
        setWeightInput={setWeightInput}
      />
      <AssessmentList assessments={assessments}/>
    </div>
  );
}

export default App;
