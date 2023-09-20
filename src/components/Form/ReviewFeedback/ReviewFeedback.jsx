import React from "react";
import {useSelector} from 'react-redux'
function ReviewFeedback() {
    const form = useSelector(store => store.form); 
  
  
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {form.feeling}</p>
        <p>Understanding: {form.understanding}</p>
        <p>Support: {form.support}</p>
        <p>Comments: {form.comments}</p>
        <button>submit</button>
      </div>
    );
  }
  
  export default ReviewFeedback;