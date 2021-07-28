import React, { Component } from "react";
import api from "../../api";

class GuestInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forename: "",
      surname: "",
      guestGroupID: "",
      receptionOnly: false,
    };
  }

  handleChangeInputForename = async (event) => {
    const forename = event.target.value;
    this.setState({ forename });
  };
  handleChangeInputSurname = async (event) => {
    const surname = event.target.value;
    this.setState({ surname });
  };
  handleChangeInputGuestGroupID = async (event) => {
    const guestGroupID = event.target.validity.valid
      ? event.target.value
      : this.state.guestGroupID;

    this.setState({ guestGroupID });
  };
  handleChangeInputReceptionOnly = async (event) => {
    const receptionOnly = event.target.value;
    this.setState({ receptionOnly });
  };
  handleIncludeGuest = async () => {
    const { forename, surname, guestGroupID, receptionOnly } = this.state;
    const payload = { forename, surname, guestGroupID, receptionOnly };

    const response = await api.insertGuest(payload);
    window.location.href = `/guest/update/${response.data.id}`;
  };

  render() {
    const { forename, surname, guestGroupID, receptionOnly } = this.state;
    return (
      <div className="form-group">
        <div className="row">
          <div className="col">
            <div className="h1">Create Guest</div>
          </div>
          <div className="col">
            <a className="btn btn-primary float-right" href={"/guest/list"}>
              Back to guests
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="margin: 5px">Forename: </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              value={forename}
              onChange={this.handleChangeInputForename}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="margin: 5px">Surname: </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              value={surname}
              onChange={this.handleChangeInputSurname}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="margin: 5px">Guest Group ID: </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="number"
              value={guestGroupID}
              onChange={this.handleChangeInputGuestGroupID}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="margin: 5px">Reception Only</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              type="checkbox"
              value={receptionOnly}
              onChange={this.handleChangeInputCeceptionOnly}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={this.handleIncludeGuest}
            >
              Add Guest
            </button>
            <a className="btn btn-danger ml-2" href={"/guest/list"}>
              Cancel
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestInsert;
