import React from 'react'
import '../Stylesheets/Form.css';

// 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

function Form({ gradeInput, assessments, setAssessments, setGradeInput, setWeightInput }) {
    const gradeInputHandler = (e) => {
        setGradeInput(e.target.value);        
    }

    const submitAssessmentHandler = (e) => {
        e.preventDefault();
        setAssessments([
            ...assessments, {gradeInput: gradeInput, id: Math.random() * 1000},
        ]);
        setGradeInput("");
    }

    return (
        <div className="form">
            <div className="form-container">
                <div>
                    <h1>1</h1>
                </div>
                <div className="grade-input">
                    <input value={gradeInput} onChange={gradeInputHandler} class="form-input" placeholder="0%"></input>
                </div>
                <div>
                    <input class="form-input" placeholder="0%"></input>
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

export default Form
