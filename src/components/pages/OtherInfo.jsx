import React, { Component } from "react"
import imageLeft from '../../images/otherInfoLeft.png'
import imageRight from "../../images/otherInfoRight.png"
import OtherInfoText from './partialPages/otherInfoText.jsx'

class GuestLanding extends Component {  
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="row m-0 mt-5 text-center">
        <div className="col-3 d-none d-sm-block">
          <img
            src={imageLeft}
            className="otherInfoImage"
            alt="flowers are pretty"
          />
        </div>
        <div className="col-6 d-none d-sm-block">
          <h1>
            <OtherInfoText />
          </h1>
        </div>
        <div className="col-12 d-block d-sm-none">
          <p>
            <OtherInfoText />
          </p>
          <div className="row d-block d-sm-none">
            <div className="col">
              <img
                src={imageLeft}
                className="otherInfoImage"
                alt="flowers are pretty"
              />
            </div>
            <div className="col">
              <img
                src={imageRight}
                className="otherInfoImage"
                alt="flowers are pretty"
              />
            </div>
          </div>
        </div>
        <div className="col-3 d-none d-sm-block">
          <img
            src={imageRight}
            className="otherInfoImage"
            alt="flowers are pretty"
          />
        </div>
      </div>
    );
  }
}

export default GuestLanding;
