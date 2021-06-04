import React, { useEffect } from "react";

import Aos from "aos";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as VideoConf from "../../../public/59500-video-conferance-gif.json";

import "./LandingPage.css";
import "aos/dist/aos.css";
import Loading from "./Loading";
import Speakers from "./Speakers/Speakers";
import DateComponent from "./DateComponent";

const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div className="landing-anim">
      <div className="banner">
        <div className="load-anim container">
          <br />
          <br />
          <br />
          <h1 className="font-weight-semibold">
            INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWORKS 2021
          </h1>
          <br />
          <h6 className="font-weight-normal text-muted">
            <a
              href="https://www.google.com/maps/place/Sri+Lanka+Institute+of+Information+Technology/@6.9146828,79.9707558,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae256db1a6771c5:0x2c63e344ab9a7536!8m2!3d6.9146775!4d79.9729445"
              style={{ textDecoration: "none" }}
            >
              <i
                style={{ fontSize: "20px" }}
                className="icon ion-android-locate"
              />{" "}
              Sri Lanka Institute of Information Technology
            </a>
          </h6>
          <h6 className="font-weight-normal text-muted">
            <i style={{ fontSize: "20px" }} className="icon ion-android-time" />{" "}
            8.00am - 3.00pm
          </h6>
          <br />
          <DateComponent />
          <br />
          <div>
            <Button variant="contained" color="primary">
              Learn more
            </Button>
          </div>
          <div style={{ width: "100%" }}>
            <Loading
              setContent={VideoConf}
              loop={true}
              height={500}
              width={600}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          data-aos="fade-up"
          className="row"
          style={{ width: "100%", alignItems: "center" }}
        >
          <div className="col col-sm-2"></div>
          <div className="col col-sm-8">
            <div className="cardSize">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  About our conference
                </Typography>
                <Typography variant="h5" component="h2">
                  <strong>
                    1ST INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWORKS 2021
                  </strong>
                </Typography>
                <br />
                <Typography
                  style={{ lineHeight: "2" }}
                  color="textSecondary"
                  variant="body"
                  component="p"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  quis viverra lacus. Morbi feugiat turpis ex, quis tempus arcu
                  sagittis at. Aenean dapibus arcu ligula, et laoreet mauris
                  lobortis eu. Vivamus vel finibus ex, et dapibus leo. Phasellus
                  nec erat lacinia, faucibus nulla non, sagittis urna. Donec
                  eget arcu eu lorem imperdiet ultrices aliquam non purus. Nam
                  suscipit magna sit amet ligula fringilla maximus. Nulla
                  hendrerit sapien ut arcu pulvinar dapibus. Nulla porttitor
                  ipsum neque, vitae vulputate augue ullamcorper at. Nullam eu
                  mauris nec libero commodo vestibulum. Aenean hendrerit
                  suscipit rutrum. Mauris tristique ultrices facilisis. Nam quis
                  laoreet risus, consectetur semper lorem.
                </Typography>
              </CardContent>
              <CardActions className="row">
                <div className="col col-sm-3"></div>
                <div className="col col-sm-6">
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </div>
                <div className="col col-sm-3"></div>
              </CardActions>
            </div>
          </div>
          <div className="col col-sm-2"></div>
        </div>
        <br />
      </div>
      <Speakers />
    </div>
  );
};

export default LandingPage;
