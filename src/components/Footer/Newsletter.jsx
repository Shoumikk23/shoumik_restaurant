import React from "react";
import { SubHeading } from "../../components";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to our newslettet</h1>
      <p className="p__opensans">And never miss and update</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your emil address" />
      <button className="custom__button " type="button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
