import React from "react";
import SupportFeedback from "./SupportFeedback/SupportFeedback";
import CommentsFeedback from "./CommentsFeedback/CommentsFeedback";
import UnderstandingFeedback from "./UnderstandingFeedback/UnderstandingFeedback";
import FeelingsFeedback from "./FeelingsFeeback/FeelingsFeedback";
import './Form.css';
import {useSelector} from 'react-redux'

function Form() {
  //const [step, setStep] = useState(1);
    
  const step = useSelector(store => store.formStep); 
  
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