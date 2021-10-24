import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function Form({ weightInput, setWeightInput, gradeInput, assessments, setAssessments, setGradeInput}) {
    const [count, setCount] = useState(1);

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
    }

    return (
        <div className="form">
            <div className="form-container">
                <div>
                    <h1>{count}</h1>
                </div>
                <div className="grade-input">
                    <input value={gradeInput} onChange={gradeInputHandler} class="form-input" placeholder="0%"></input>
                </div>
                <div>
                    <input value={weightInput} onChange={weightInputHandler} class="form-input" placeholder="0%"></input>
                </div>
            </div>
            <div>
                <button onClick={submitAssessmentHandler}>Add Assessment</button>
            </div>
            <div>
                <button>Calculate</button>
            </div>
        </div>
    )
}

export default Form;
