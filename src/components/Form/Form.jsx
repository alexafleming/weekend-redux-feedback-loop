import React from "react";
import SupportFeedback from "./SupportFeedback/SupportFeedback";
import CommentsFeedback from "./CommentsFeedback/CommentsFeedback";
import UnderstandingFeedback from "./UnderstandingFeedback/UnderstandingFeedback";
import FeelingsFeedback from "./FeelingsFeeback/FeelingsFeedback";
import './Form.css';

function Form() {
    
  
  
    return (
      <div>
        <FeelingsFeedback />
        <UnderstandingFeedback />
        <SupportFeedback />
        <CommentsFeedback />
      </div>
    );
  }
  
  export default Form;