import './App.css';
import React, { useState } from 'react';
import Assessment from './Components/Assessment';
import Title from './Components/Title';
import Form from './Components/Form';
import AssessmentList from './Components/AssessmentList';

function App() {
  const [gradeInput, setGradeInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [assessmentNumber, setAssessmentNumber] = useState(10);
  const [assessments, setAssessments] = useState([]);

  return (
    <div className="App">
      <Title/>
      <Form
        assessmentNumber={assessmentNumber}
        setAssessmentNumber={setAssessmentNumber} 
        setAssessments={setAssessments} 
        assessments={assessments} 
        setGradeInput={setGradeInput} 
        gradeInput={gradeInput}
        weightInput={weightInput}
        setWeightInput={setWeightInput}
      />
      <AssessmentList assessmentNumber={assessmentNumber} assessments={assessments}/>
    </div>
  );
}

export default App;
