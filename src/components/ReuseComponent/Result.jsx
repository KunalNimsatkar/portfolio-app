import React from "react";
import { GrClose } from "react-icons/gr";

const Result = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button className="close_btn" onClick={() => props.setTrigger(false)}>
          {<GrClose />}
        </button>
        <p>Message Send Successfully. I'll get in touch with you soon</p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Result;
