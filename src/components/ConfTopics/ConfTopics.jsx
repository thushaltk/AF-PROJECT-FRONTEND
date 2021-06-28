import React from "react";

import Button from "@material-ui/core/Button";

import "./ConfTopics.css";
import { useState } from "react";
import { useEffect } from "react";
import EditorService from "../../services/EditorService";

const ConfTopics = () => {
  const [topics, setTopics] = useState([]);
  let tempArr = ["temp1", "temp2", "temp3"];

  useEffect(() => {
    EditorService.getApprovedTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <div className="conf-topic-bg">
      <div style={{ padding: "40px", width: "100%", height: "100%" }}>
        <h2>Conference Topics</h2>
        <br />
        <br />
        <div className="row">
          {topics.map((tp) => {
            return (
              <div className="col col-lg-4">
                <div className="conf-topic-card text-center">
                  <h2>{tp.topicTitle}</h2>
                  <img
                    width="50%"
                    height="50%"
                    src={tp.coverImgURL}
                    alt="cover image"
                  />
                  <br />
                  <br />
                  <h6>{tp.description}</h6>
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConfTopics;
