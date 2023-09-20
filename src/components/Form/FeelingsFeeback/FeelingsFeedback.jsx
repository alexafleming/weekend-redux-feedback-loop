import React from "react";

// - How are you feeling today?
// ![feeling](wireframes/feeling.png)

function FeelingsFeedback() {



  return (
    <div>
      <h2>How are you feeling today?</h2>
      <div>
        <label>feeling?</label>
      </div>
      <input type="number"/>
      <button>Next</button>
    </div>
  );
}

export default FeelingsFeedback;