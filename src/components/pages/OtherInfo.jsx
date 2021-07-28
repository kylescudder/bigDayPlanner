import React, { Component } from "react";

class GuestLanding extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <section id="guestCover" className="loginImage marginRemover">
          <div id="cover-caption">
            <h2>
              We would like our special day to be an adult only occasion. We
              hope you can join us in celerbrating our marriage! Please know
              that all we really want for our wedding day is for you to be there
              to celerbrate with us, but if you would like to give us something,
              a contribution towards *blank* would be really appreciated. Dress
              code: Formal (Black Tie optional)
            </h2>
          </div>
        </section>
      </div>
    );
  }
}

export default GuestLanding;
