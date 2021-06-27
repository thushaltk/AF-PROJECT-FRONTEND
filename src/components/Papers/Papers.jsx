import React from "react";

import Button from "@material-ui/core/Button";

import "./Papers.css";
import { useState } from "react";
import { useEffect } from "react";
import EditorService from "../../services/EditorService";

const Papers = () => {
  const [rsPapers, setRSPaper] = useState([]);
  let tempArr = ["temp1", "temp2", "temp3"];

  useEffect(() => {
    EditorService.getRSPapers().then((res) => {
      setRSPaper(res);
    });
  }, []);

  return (
    <div style={{ padding: "40px", width: "100%", height: "100%" }}>
      <div className="row">
            {rsPapers.map((rs) => {
              return (
                <div className="col col-lg-4">
                  <div className="papers-card text-center">
                    <h2>{rs.researchPaperTitle}</h2>
                    <img
                      width="50%"
                      height="50%"
                      src={rs.coverImgURL}
                      alt="cover image"
                    />
                    <br />
                    <br />
                    <h6>Author Name:- {rs.authorName}</h6>
                    <h6>Author Email:- {rs.authorEmail}</h6>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          window.open(rs.researchPaperURL, "_blank");
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
  );
};

export default Papers;
