import React from 'react';
import Assessment from './Assessment';

function AssessmentList({ assessments }) {
    return (
        <div className="assessments">
            <ul className="assessment-list">
                {assessments.map((assessment => 
                    <Assessment count={assessment.count} gradeInput={assessment.gradeInput} weightInput={assessment.weightInput}/>    
                ))}
            </ul>
        </div>
    )
}

export default AssessmentList;
