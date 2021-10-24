import React from 'react';
import Assessment from './Assessment';

function AssessmentList( {assessments} ) {
    return (
        <div className="assessments">
            <ul className="assessment-list">
                {assessments.map((assessment => 
                    <Assessment gradeInput={assessment.gradeInput}/>    
                ))}
            </ul>
        </div>
    )
}

export default AssessmentList
