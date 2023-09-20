import React from "react";
import { useDispatch } from "react-redux";
import {useState} from "react"

// - How are you feeling today?
// ![feeling](wireframes/feeling.png)

function FeelingsFeedback() {
  const [response, setResponse] = useState("");
  const dispatch = useDispatch();

  const onClick = () => {
    if (response != '' && response != null) {
      dispatch({ type: 'SET_NEXT_STEP' })
    }else{
      alert("Enter a value")
  }
  }

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <div>
        <label>feeling?</label>
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

export default FeelingsFeedback;