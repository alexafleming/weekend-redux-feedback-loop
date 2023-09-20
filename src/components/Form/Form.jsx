import React from "react";
import SupportFeedback from "./SupportFeedback/SupportFeedback";
import CommentsFeedback from "./CommentsFeedback/CommentsFeedback";
import UnderstandingFeedback from "./UnderstandingFeedback/UnderstandingFeedback";
import FeelingsFeedback from "./FeelingsFeeback/FeelingsFeedback";
import './Form.css';

function Form() {
    
  
  
    return (
      <div>
        {step === 1 && <FeelingsFeedback/>}
        {step === 2 && <UnderstandingFeedback/>}
        {step === 3 && <SupportFeedback />}
        {step === 4 && <CommentsFeedback/>}
      </div>
    );
  }
  
  export default Form;