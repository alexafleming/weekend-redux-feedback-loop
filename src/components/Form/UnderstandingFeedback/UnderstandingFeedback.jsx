import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react"

// - How well are you understanding the content?
// ![understanding](wireframes/understanding.png)

function UnderstandingFeedback() {
    const [response, setResponse] = useState("");
    const dispatch = useDispatch();

    const onClick = () => {
        if (response != '' && response != null) {
            dispatch({ type: 'SET_NEXT_STEP' })
        }
    }



    return (
        <div>
            <h2>How well are you understanding?</h2>
            <div>
                <lable>Understanding?</lable>
            </div>
            <input
                type="number"
                value={response}
                onChange={(event) => setResponse(event.target.value)}
            />
            <button onClick={() => [onClick()]}>Next</button>
        </div>
    );
}

export default UnderstandingFeedback;