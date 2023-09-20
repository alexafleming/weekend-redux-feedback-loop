import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react"

// - Any comments you want to leave?
// ![comments](wireframes/comments.png)

function CommentsFeedback() {
    const [response, setResponse] = useState("");
    const dispatch = useDispatch();

    const onClick = () => {
            dispatch({ type: 'SET_NEXT_STEP' })
        } 
  
    return (
      <div>
              <h2>Any Comments you want to leave?</h2>
            <div>
                <label>Comments?</label>
            </div>
            <input
                type="text"
                placeholder="comments or concerns?"
                value={response}
                onChange={(event) => setResponse(event.target.value)}
            />
            <button onClick={() => [onClick()]}>Next</button>
        </div>
    );
  }
  
  export default CommentsFeedback;