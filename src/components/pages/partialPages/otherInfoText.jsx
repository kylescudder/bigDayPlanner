import React, { Component } from 'react'

class OtherInfoText extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

	render() {
		return (
      <div>
        <div className="row pb-5">
          <div className="col">
            We would like our special day to be an adult only occasion.
          </div>
        </div>
        <div className="row">
          <div className="col pb-5">
            We hope you can join us in celerbrating our marriage! Please know
            that all we really want for our wedding day is for you to be there
            to celerbrate with us, but if you would like to give us something, a
            contribution towards *blank* would be really appreciated.
          </div>
        </div>
        <div className="row">
          <div className="col">Dress code: Formal (Black Tie optional)</div>
        </div>
      </div>
    );
	}
}
export default OtherInfoText