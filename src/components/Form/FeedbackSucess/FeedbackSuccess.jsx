import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react"


function FeedbackSuccess() {
const [response, setResponse] = useState("");
    const dispatch = useDispatch();

    const resetForm = () => {
        dispatch({ type: 'RESET_FORM'})
    }

  return (
    <div>
      <h2>Submission Success!</h2>
      <p>Your feedback has been submitted successfully.</p>
      <button onClick={resetForm}>Start New Survey</button>
    </div>
  );
}

export default FeedbackSuccess;