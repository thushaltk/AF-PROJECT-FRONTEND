import React from "react";

import Button from "@material-ui/core/Button";

import "./WSProposals.css";
import { useState } from "react";
import { useEffect } from "react";
import EditorService from "../../services/EditorService";

const WSProposals = () => {
  const [wsProposals, setWSProposals] = useState([]);

  useEffect(() => {
    EditorService.getWSProposals().then((res) => {
      setWSProposals(res);
    });
  }, []);

  return (
    <div className="wsproposals-bg">
      <div style={{ padding: "40px", width: "100%", height: "100%" }}>
        <div className="row">
          {wsProposals.map((ws) => {
            return (
              <div className="col col-lg-4">
                <div className="wsproposals-card text-center">
                  <h2>{ws.wsProposalTitle}</h2>
                  <img
                    width="50%"
                    height="50%"
                    src={ws.coverImgURL}
                    alt="cover image"
                  />
                  <br />
                  <br />
                  <h6>Presenter Name:- {ws.authorName}</h6>
                  <h6>Presenter Email:- {ws.authorEmail}</h6>
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        window.open(ws.wsProposalLink, "_blank");
                      }}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WSProposals;
