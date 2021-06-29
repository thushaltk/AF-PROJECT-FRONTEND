import React from "react";

import Button from "@material-ui/core/Button";

import "./SpecialSessions.css";

const SpecialSessions = () => {
  return (
    <div className="specialsessions-bg">
      <div style={{ padding: "40px", width: "100%", height: "100%" }}>
        <div className="row">
          <div className="col col-lg-4">
            <div className="specialsessions-card text-center">
              <h2>SPECIAL SESSION ORGANIZATION TIMELINE & IMPORTANT DATES</h2>
              <br />
              <br />
              <h6>
                1. Special Session Proposal Deadline –{" "}
                <strong>July 1st, 2021</strong>
              </h6>
              <h6>
                2. Special Session Proposal Acceptance Notification –{" "}
                <strong>July 15th, 2021</strong>
              </h6>
              <h6>
                3. Special Session Paper Submission Deadline –{" "}
                <strong>September 15th, 2021</strong>
              </h6>
              <h6>
                4. Special Session Acceptance Notification –{" "}
                <strong>October 25th, 2021</strong>
              </h6>
              <br />
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="specialsessions-card text-center">
              <h2>SPECIAL SESSION PROPOSAL SUBMISSION</h2>
              <br />
              <br />
              <h6 style={{lineHeight: "1.8rem"}} >
              Special Session proposals should be <strong>submitted by email, in PDF, to Special Session Chairs; abc@acaf.ac.lk, def@ab.acaf.lk with subject “Special Session Proposal for ICAF 2021” by July 1st, 2021 or Microsoft CMT special session track online.</strong>Special Session organizers will be notified by email of the acceptance or rejection of their proposal by July 15th, 2021
              </h6>
              <br />
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="specialsessions-card text-center">
              <h2>SPECIAL SESSION PROPOSAL FORMAT</h2>
              <br />
              <br />
              <h6 style={{lineHeight: "1.8rem"}} >
              <strong>If you are interested in organizing a Special Session at ICAF 2021 </strong> download the following Special Session proposal template and send a preliminary proposal by 1st of July 2021.
              </h6>
              <br/>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    window.open("https://icac.lk/wp-content/uploads/2021/06/Proposal_Formay_Special-Session-ICAC-2021__.docx", "_blank");
                }}
              >DOWNLOAD</Button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSessions;
