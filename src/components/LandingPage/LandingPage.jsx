import React from 'react';

import './LandingPage.css';

const LandingPage = () => {
    return ( 
        <div>
            <div className="banner" >
                <div className="container">
                    <br/><br/><br/>
                    <h1 className="font-weight-semibold">INTERNATIONAL CONFERENCE ON APPLICATION FRAMWORKS 2021</h1>
                    <h6 className="font-weight-normal text-muted pb-3">Simple is a simple template with a creative design that solves all your marketing and SEO queries.</h6>
                    <div>
                        <button className="btn btn-opacity-light mr-1">Get started</button>
                        <button className="btn btn-opacity-success ml-1">Learn more</button>
                    </div>
                    <img src="https://inbo.ir/wp-content/uploads/2020/09/online_instagram_1-min-1200x675.jpg" alt="" className="img img-fluid"/>
                </div>
                <br/><br/>
            </div>
        </div>
     );
}
 
export default LandingPage;