import React from "react";
import SupportFeedback from "./SupportFeedback/SupportFeedback";
import CommentsFeedback from "./CommentsFeedback/CommentsFeedback";
import UnderstandingFeedback from "./UnderstandingFeedback/UnderstandingFeedback";
import FeelingsFeedback from "./FeelingsFeeback/FeelingsFeedback";
import ReviewFeedback from "./ReviewFeedback/ReviewFeedback";
import FeedbackSuccess from "./FeedbackSucess/FeedbackSuccess";

import './Form.css';
import {useSelector} from 'react-redux'


function Form() {

    
  const form = useSelector(store => store.form); 
  
    return (
      <div>
        {form.step === 1 && <FeelingsFeedback/>}
        {form.step === 2 && <UnderstandingFeedback/>}
        {form.step  === 3 && <SupportFeedback />}
        {form.step  === 4 && <CommentsFeedback/>}
        {form.step  === 5 && <ReviewFeedback/>}
        {form.step  === 6 && <FeedbackSuccess/>}


      </div>
    );
  }
  
  export default Form;