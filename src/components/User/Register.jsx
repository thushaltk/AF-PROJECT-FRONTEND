import React, { useState } from "react";

import "./Register.css";
import { Button } from "@material-ui/core";
import Loading from "../LandingPage/Loading";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as Researcher from "../../../public/42476-register.json";
import * as Presenter from "../../../public/47326-success.json";
import * as Attendee from "../../../public/63228-man-watching-a-movie.json";

import ResearcherRegForm from "./Researcher/ResearcherRegForm";
import WSPresenter from "./WSPresenter/WSPresenter";
import AttendeeReg from "./Attendee/AttendeeReg";


const addFeeData = (authorCat, fee) => {
  return {authorCat, fee};
}

const rows = [
  addFeeData('Researcher', "$100/per paper"),
  addFeeData('Attendee', "$15"),
  addFeeData('Workshop Presenter', "FREE"),
];


const Register = () => {
    const [clickedResearcher, isClickedResearcher] = useState(false);
    const [clickedPresenter, isClickedPresenter] = useState(false);
    const [clickedAttendee, isClickedAttendee] = useState(false);

    const researcherHandler = () =>{
        isClickedResearcher(true);
    }
    
    const presenterHandler = () => {
        isClickedPresenter(true);
    }

    const attendeeHandler = () => {
      isClickedAttendee(true);

    }
    const setToClose = (cls) => {
        isClickedResearcher(cls);
        isClickedPresenter(cls);
        isClickedAttendee(cls);
    }


  return (
      <>
    <div className="row login-clean" >
      <div className="col col-sm-4 login-anim" style={{margin: "0 auto"}}>
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
      <div className="col col-sm-4 login-anim" style={{margin: "0 auto"}}>
        <div className="reg login-anim">
          <Loading
            setContent={Attendee}
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
              onClick={attendeeHandler}
            >
              Register as an Attendee
            </Button>
          </div>
        </div>
      </div>
      <div className="col col-sm-4">
        <div className="reg login-anim" style={{margin: "0 auto"}}>
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
    </div>
    {clickedResearcher ? <ResearcherRegForm open={clickedResearcher} close={setToClose}/> : ""}
    {clickedPresenter ? <WSPresenter open={clickedPresenter} close={setToClose}/> : ""}
    {clickedAttendee ? <AttendeeReg open={clickedAttendee} close={setToClose}/> : ""}
    <div className="login-clean" style={{padding: "40px"}} >
      <h2 style={{textAlign: "center"}}>Registration Fee Details</h2><br/>
    <TableContainer component={Paper} style={{margin: "0 auto", width: "80%"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{fontSize: "20px"}}>Author Category</TableCell>
            <TableCell align="center" style={{fontSize: "20px"}}>Fee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.authorCat}>
              <TableCell style={{fontSize: "15px"}} align="center" component="th" scope="row">
                {row.authorCat}
              </TableCell>
              <TableCell style={{fontSize: "15px"}} align="center">{row.fee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
    </>
  );
};

export default Register;
