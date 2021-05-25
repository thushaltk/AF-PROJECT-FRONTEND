import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";
import Loading from "../LandingPage/Loading";
import * as Researcher from "../../../public/42476-register.json";
import * as Presenter from "../../../public/47326-success.json";

import "./Register.css";
import ResearcherRegForm from "./Researcher/ResearcherRegForm";
import WSPresenter from "./WSPresenter/WSPresenter";

const Register = () => {
    const [clickedResearcher, isClickedResearcher] = useState(false);
    const [clickedPresenter, isClickedPresenter] = useState(false);



    const researcherHandler = () =>{
        isClickedResearcher(true);
    }
    
    const presenterHandler = () => {
        isClickedPresenter(true);
    }
    const setToClose = (cls) => {
        isClickedResearcher(cls);
        isClickedPresenter(cls);
    }


  return (
      <>
    <div className="row login-clean">
      <div className="col col-sm-1"></div>
      <div className="col col-sm-5 login-anim">
        <div className="reg login-anim">
          <Loading
            setContent={Researcher}
            loop={true}
            width={300}
            height={300}
          />
          <br />
          <div>
            <Button
              className="btn-block"
              type="submit"
              variant="contained"
              color="primary"
              style={{ fontSize: "20px" }}
              onClick={researcherHandler}
            >
              Register as a Researcher
            </Button>
          </div>
        </div>
      </div>
      <div className="col col-sm-5">
        <div className="reg login-anim">
          <Loading
            setContent={Presenter}
            loop={true}
            width={300}
            height={300}
          />
          <br />
          <div>
            <Button
              className="btn-block"
              type="submit"
              variant="contained"
              color="primary"
              style={{ fontSize: "20px" }}
              onClick={presenterHandler}
            >
              Register as a Workshop Presenter
            </Button>
          </div>
        </div>
      </div>
      <div className="col col-sm-1"></div>
    </div>
    {clickedResearcher ? <ResearcherRegForm open={clickedResearcher} close={setToClose}/> : ""}
    {clickedPresenter ? <WSPresenter open={clickedPresenter} close={setToClose}/> : ""}
    </>
  );
};

export default Register;
