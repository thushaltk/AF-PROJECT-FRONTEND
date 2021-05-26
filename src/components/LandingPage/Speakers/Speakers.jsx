import React, { useEffect } from "react";
import Aos from "aos";

import './Speakers.css';

const Speakers = () => {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })

  return (
    <section className="team-clean">
      <div className="container">
        <div data-aos="fade-up" className="intro">
          <h2 className="text-center">Keynote Speakers</h2>
          <p className="text-center">
            Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
            Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
          </p>
        </div>
        <div className="row people">
          <div data-aos="fade-right" className="col-md-6 col-lg-4 item">
            <img className="rounded-circle speakers-pic"/>
            <h3 className="name">Kishen Deemud</h3>
            <p className="title">Musician</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
              semper massa.{" "}
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div data-aos="fade-up" className="col-md-6 col-lg-4 item">
            <img className="rounded-circle speakers-pic"/>
            <h3 className="name">Thushal T K</h3>
            <p className="title">Artist</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
              semper massa.{" "}
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="col-md-6 col-lg-4 item">
            <img className="rounded-circle speakers-pic"/>
            <h3 className="name">Eishan Dinuka</h3>
            <p className="title">Stylist</p>
            <p className="description">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              et interdum justo suscipit id. Etiam dictum feugiat tellus, a
              semper massa.{" "}
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
