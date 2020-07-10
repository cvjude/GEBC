import React from "react";
import "./style.scss";


const Message = () => {
  return (
    <section className="wwu">
      <div className="container">
        <h1 className="hd">Worship Avenue</h1>
        <p className="s_hd">Fellowship with us on any of these days</p>

        <div className="crds flex-row">
          <div className="plch flex-row j-start">
            <div className="date theme flex-row">
              <p>Sun</p>
            </div>
            <div>
              <p>
                <strong>Celebration Service</strong> 8am & 10am
              </p>
              <p>
                <strong>Sunday School</strong> 9am
              </p>
            </div>
          </div>

          <div className="plch flex-row j-start">
            <div className="date green flex-row">
              <p>Wed</p>
            </div>
            <div>
              <p>
                <strong>Moment of Elevation</strong> 6pm
              </p>
            </div>
          </div>
        </div>

        <div className="crds flex-row">
          <div className="plch flex-row j-start">
            <div className="date off flex-row">
              <p>1ST</p>
            </div>
            <div>
              <p>
                <strong>Open Heaven</strong> 5:30am
              </p>
              <p>Every 1st day of the month</p>
            </div>
          </div>

          <div className="plch flex-row j-start">
            <div className="date secondary flex-row">
              <p>FRI</p>
            </div>
            <div>
              <p>
                <strong>Night of Possibilities</strong> 12:00am
              </p>
              <p>Every last Friday of the month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
