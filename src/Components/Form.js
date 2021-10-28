import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function Form({ weightInput, setWeightInput, gradeInput, assessments, setAssessments, setGradeInput}) {
    const [count, setCount] = useState(1);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalMark, setTotalMark] = useState(0);

    const gradeInputHandler = (e) => {
        setGradeInput(e.target.value);        
    }

    const weightInputHandler = (e) => {
        setWeightInput(e.target.value);        
    }
    
    const submitAssessmentHandler = (e) => {
        e.preventDefault();
        setAssessments([
            ...assessments, {gradeInput: gradeInput, weightInput: weightInput, id: 1, count: count},
        ]);
        setGradeInput("");
        setWeightInput("");

        setCount(count => count + 1);
        setTotalWeight(totalWeight => totalWeight + parseInt(weightInput));
        setTotalMark(totalMark => totalMark + ((parseInt(gradeInput) / 100) * parseInt(weightInput)));
    }

    const showAlert = () => {
        alert("!");
    }

    return (
        <div className="form">
            <div className="form-container">
                <div>
                    <h1>{count}</h1>
                    <h2>Grade Received: {totalMark}%</h2>
                    <h2>Current mark so far: {(totalMark / totalWeight) * 100}%</h2>
                    <h2>Total Weight of all Assessments: {totalWeight}%</h2>
                </div>
                <div className="grade-input">
                    <input type="number" value={gradeInput} onChange={gradeInputHandler} class="form-input" placeholder="0%"></input>
                </div>
                <div>
                    <input type="number" value={weightInput} onChange={weightInputHandler} class="form-input" placeholder="0%"></input>
                </div>
            </div>
            <div>
                <button onClick={submitAssessmentHandler}>Add Assessment</button>
            </div>
            <div>
                <button onClick={showAlert}>Calculate</button>
            </div>
        </div>
    )
}

export default Form;
