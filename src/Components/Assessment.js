import React from 'react';
import '../Stylesheets/Assessment.css';

function Assessment({ gradeInput }) {
    return (
        <div className="assessment">
            <div className="assessment-container">
                <div>
                    <h1 className="assessment-output">Assessment 1 -</h1>
                </div>
                <div>
                    <h1 className="assessment-output">Grade: {gradeInput}%</h1>
                </div>
                <div>
                    <h1 className="assessment-output">Weight: 0%</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Assessment
