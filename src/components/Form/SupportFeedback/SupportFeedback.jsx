import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react"

// - How well are you being supported?
// ![support](wireframes/supported.png)

function SupportFeedback() {
    const [response, setResponse] = useState("");
    const dispatch = useDispatch();

    const onClick = () => {
        if (response != '' && response != null) {
            dispatch({ type: 'SET_NEXT_STEP' })
        } else {
            alert("Enter a value")
        }
    }




    return (
        <div>
            <h2>How well are you being supported?</h2>
            <div>
                <label>Supported?</label>
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

export default SupportFeedback;