import React, { useState } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios'; 
import { useDispatch } from "react-redux";

function ReviewFeedback() {
  const form = useSelector(store => store.form);
  const dispatch = useDispatch();

  // Function to handle the submit button click
  const handleSubmit = () => {
    axios
      .post('/feedback', form) 
      .then(response => {
        dispatch({ type: 'SET_NEXT_STEP', payload: {step: 6, response: response} })
      })
      .catch(error => {
        console.log(error);
        alert('Sorry, could not add feedback');
      });
  };

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {form.feeling}</p>
      <p>Understanding: {form.understanding}</p>
      <p>Support: {form.support}</p>
      <p>Comments: {form.comments}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ReviewFeedback;