import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function Form({ weightInput, setWeightInput, gradeInput, assessments, setAssessments, setGradeInput}) {
    const [count, setCount] = useState(1);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalMark, setTotalMark] = useState(0);
    const [letterGrade, setLetterGrade] = useState("N/A");
    const [gpa, setGpa] = useState(0);

    const calculateFinalGrade = () => {
        if(parseFloat(totalMark) >= 89.45){
            setLetterGrade("A+");
            setGpa(4.33);
        }else if(parseFloat(totalMark) >= 83.45 && parseFloat(totalMark) <= 89.44){
            setLetterGrade("A");
            setGpa(4.00);
        }else if(parseFloat(totalMark) >= 79.45 && parseFloat(totalMark) <= 83.44){
            setLetterGrade("A-");
            setGpa(3.67);
        }else if(parseFloat(totalMark) >= 76.45 && parseFloat(totalMark) <= 79.44){
            setLetterGrade("B+");
            setGpa(3.33);
        }else if(parseFloat(totalMark) >= 72.45 && parseFloat(totalMark) <= 76.44){
            setLetterGrade("B");
            setGpa(3.00);
        }else if(parseFloat(totalMark) >= 69.45 && parseFloat(totalMark) <= 72.44){
            setLetterGrade("B-");
            setGpa(2.67);
        }else if(parseFloat(totalMark) >= 66.45 && parseFloat(totalMark) <= 69.44){
            setLetterGrade("C+");
            setGpa(2.33);
        }else if(parseFloat(totalMark) >= 62.45 && parseFloat(totalMark) <= 66.44){
            setLetterGrade("C");
            setGpa(2.00);
        }else if(parseFloat(totalMark) >= 59.45 && parseFloat(totalMark) <= 62.44){
            setLetterGrade("C-");
            setGpa(1.67);
        }else if(parseFloat(totalMark) >= 56.45 && parseFloat(totalMark) <= 59.44){
            setLetterGrade("D+");
            setGpa(1.33);
        }else if(parseFloat(totalMark) >= 52.45 && parseFloat(totalMark) <= 56.44){
            setLetterGrade("D");
            setGpa(1.00);
        }else if(parseFloat(totalMark) >= 49.45 && parseFloat(totalMark) <= 52.44){
            setLetterGrade("D-");
            setGpa(0.67);
        }else{
            setLetterGrade("F");
            setGpa(0.00);
        }
    }

    const resetFields = () => {
        window.location.reload(false);
    }

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
        setTotalWeight(totalWeight => totalWeight + parseFloat(weightInput));
        setTotalMark(totalMark => parseFloat(totalMark + ((parseFloat(gradeInput) / 100) * parseFloat(weightInput))).toFixed(2));
    }

    return (
        <div className="form">
            <div className="form-container">
                <div>
                    <div>
                    </div>
                    <div className="form-title">
                        <h2>Please enter your mark and the weight of the assessment below.</h2>
                        <h2>Once you have inputted the values, press the "Add Assessment" button and the results will be shown below.</h2>
                    </div>
                    <div className="form-input-container">
                        <div>
                            <h1>{count}</h1>
                        </div>
                        <div className="grade-input">
                            <input type="number" value={gradeInput} onChange={gradeInputHandler} class="form-input" placeholder="Grade"></input>
                        </div>
                        <div>
                            <input type="number" value={weightInput} onChange={weightInputHandler} class="form-input" placeholder="Weight"></input>
                        </div>
                    </div>
                    <div className="form-btn-container">
                        <button className="form-button" onClick={submitAssessmentHandler}>Add Assessment</button>
                        <button className="form-button" onClick={resetFields}>Reset Fields</button>
                        <button className="form-button" onClick={calculateFinalGrade}>Calculate</button>
                    </div>
                    <h2>Grade Received: {parseFloat(totalMark).toFixed(2)}%</h2>
                    <h2>Current mark so far: {parseFloat((totalMark / totalWeight) * 100).toFixed(2)}%</h2>
                    <h2>Total Weight of all Assessments: {parseFloat(totalWeight).toFixed(2)}%</h2>
                    <h2>Grade: {letterGrade}</h2>
                    <h2>GPA: {gpa}</h2>
                    <h4 className="form-name">Developed by: MD Faiazur Rahman - 2021</h4>
                </div>
            </div>
        </div>
    )
}

export default Form;
