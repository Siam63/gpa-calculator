import React, { useState } from 'react';
import '../Stylesheets/Form.css';

function Form({ weightInput, setWeightInput, gradeInput, assessments, setAssessments, setGradeInput}) {
    const [count, setCount] = useState(1);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalMark, setTotalMark] = useState(0);
    const [letterGrade, setLetterGrade] = useState("N/A");
    const [gpa, setGpa] = useState(0);

    const calculateFinalGrade = () => {
        if(parseInt(totalMark) >= 90){
            setLetterGrade("A+");
            setGpa(4.33);
        }else if(parseInt(totalMark) >= 85 && parseInt(totalMark) <= 89){
            setLetterGrade("A");
            setGpa(4.00);
        }else if(parseInt(totalMark) >= 80 && parseInt(totalMark) <= 84){
            setLetterGrade("A-");
            setGpa(3.67);
        }else if(parseInt(totalMark) >= 77 && parseInt(totalMark) <= 79){
            setLetterGrade("B+");
            setGpa(3.33);
        }else if(parseInt(totalMark) >= 73 && parseInt(totalMark) <= 76){
            setLetterGrade("B");
            setGpa(3.00);
        }else if(parseInt(totalMark) >= 70 && parseInt(totalMark) <= 72){
            setLetterGrade("B-");
            setGpa(2.67);
        }else if(parseInt(totalMark) >= 67 && parseInt(totalMark) <= 69){
            setLetterGrade("C+");
            setGpa(2.33);
        }else if(parseInt(totalMark) >= 63 && parseInt(totalMark) <= 66){
            setLetterGrade("C");
            setGpa(2.00);
        }else if(parseInt(totalMark) >= 60 && parseInt(totalMark) <= 62){
            setLetterGrade("C-");
            setGpa(1.67);
        }else if(parseInt(totalMark) >= 57 && parseInt(totalMark) <= 59){
            setLetterGrade("D+");
            setGpa(1.33);
        }else if(parseInt(totalMark) >= 53 && parseInt(totalMark) <= 56){
            setLetterGrade("D");
            setGpa(1.00);
        }else if(parseInt(totalMark) >= 50 && parseInt(totalMark) <= 52){
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
        setTotalWeight(totalWeight => totalWeight + parseInt(weightInput));
        setTotalMark(totalMark => totalMark + ((parseInt(gradeInput) / 100) * parseInt(weightInput)));
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
                            <input type="number" value={gradeInput} onChange={gradeInputHandler} class="form-input" placeholder="0%"></input>
                        </div>
                        <div>
                            <input type="number" value={weightInput} onChange={weightInputHandler} class="form-input" placeholder="0%"></input>
                        </div>
                    </div>
                    <div className="form-btn-container">
                        <button className="form-button" onClick={submitAssessmentHandler}>Add Assessment</button>
                        <button className="form-button" onClick={resetFields}>Reset Fields</button>
                        <button className="form-button" onClick={calculateFinalGrade}>Calculate</button>
                    </div>
                    <h2>Grade Received: {Math.round(totalMark).toFixed(2)}%</h2>
                    <h2>Current mark so far: {Math.round((totalMark / totalWeight) * 100).toFixed(2)}%</h2>
                    <h2>Total Weight of all Assessments: {Math.round(totalWeight).toFixed(2)}%</h2>
                    <h2>Grade: {letterGrade}</h2>
                    <h2>GPA: {gpa}</h2>
                    <h4 className="form-name">Designed by: MD Faiazur Rahman</h4>
                </div>
            </div>
        </div>
    )
}

export default Form;
