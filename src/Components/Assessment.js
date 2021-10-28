import React, { useState } from 'react';
import '../Stylesheets/Assessment.css';

function Assessment({ gradeInput, weightInput, count}) {
    const [totalWeight, setTotalWeight] = useState(0);

    const addToWeight = () => {
        setTotalWeight(totalWeight => totalWeight + weightInput);
    }

    return (
        <div className="assessment">
            <div className="assessment-container">
                <div>
                    <h1 className="assessment-output">Assessment {count}:</h1>
                </div>
                <div>
                    <h1 className="assessment-output">Grade: {gradeInput}%</h1>
                </div>
                <div>
                    <h1 className="assessment-output">Weight: {weightInput}%</h1>
                </div>
            </div>
        </div>
    )
}

export default Assessment;