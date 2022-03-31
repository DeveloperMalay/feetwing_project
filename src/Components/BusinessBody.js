import React from "react";

function BusinessBody() {
  return (
    <div className="business">
      <div className="heading">
        <h1>Business System</h1>
      </div>
      <div className="rectangle">
        <div className="title1">
          <h3>Business Systems Analyst - Financial Systems</h3>
          <span>{props.formdata.title}</span>
        </div>
        <div className="description">
          <p>
            Systems team to help expand and maintain our Order to Cash
            applications and its ecosystem. Your <br /> role will be to help
            implement, administer, and optimize our business systems and assist
            with <br /> business process <span>( Short Description )</span>
          </p>
        </div>
        <div className="workStatus">
          <p>Remote / Hybrid </p>
        </div>
        <div className="otherSection">
          <div className="paid">
            <p>$ Paid</p>
          </div>
          <div className="gratis">
            <p>❤ Gratis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessBody;
