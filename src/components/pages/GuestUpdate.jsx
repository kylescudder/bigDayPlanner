import React, { Component } from "react";
import api from "../../api";
import Loading from "../misc/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QRCode from "react-qr-code";

class GuestUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      forename: "",
      surname: "",
      guestGroupID: "",
      starter: "",
      mainCourse: "",
      dietaryNote: "",
      songArtist: "",
      songName: "",
      attending: false,
      receptionOnly: false,
      isLoading: true,
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
  handleUpdateGuest = async () => {
    try {
      const { id, forename, surname, guestGroupID, receptionOnly } = this.state;
      const payload = { forename, surname, guestGroupID, receptionOnly };

      await api.updateGuestById(id, payload);
      this.setState({
        forename: payload.forename,
        surname: payload.surname,
        guestGroupID: payload.guestGroupID,
        receptionOnly: payload.receptionOnly,
      });
      toast.success("Saved successfully 👍", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    } catch (err) {
      window.location.href = `/admin/login`;
    }
  };

  componentDidMount = async () => {
    try {
      const { id } = this.state;
      const guest = await api.getGuestById(id);
      this.setState({
        forename: guest.data.data.forename,
        surname: guest.data.data.surname,
        guestGroupID: guest.data.data.guestGroupID,
        starterText: guest.data.data.starterText,
        mainCourseText: guest.data.data.mainCourseText,
        dietaryNote: guest.data.data.dietaryNote,
        songArtist: guest.data.data.songArtist,
        songName: guest.data.data.songName,
        attending: guest.data.data.attending,
        receptionOnly: guest.data.data.receptionOnly,
        qrCodeString:
          process.env.REACT_APP_WEBSITE_URL +
          "/guest/guestGroupID/" +
          guest.data.data.guestGroupID,
      });
      this.setState({ isLoading: false });
    } catch (err) {
      window.location.href = `/admin/login`;
    }
  };

  render() {
    const {
      forename,
      surname,
      guestGroupID,
      starterText,
      mainCourseText,
      dietaryNote,
      songArtist,
      songName,
      attending,
      receptionOnly,
      qrCodeString,
      isLoading,
    } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="form-group">
            <ToastContainer />
            <div className="row">
              <div className="col">
                <div className="h1">Update Guest Details</div>
              </div>
              <div className="col">
                <a
                  className="btn btn-primary float-right"
                  href={"/admin/guest/list"}
                >
                  Back to guests
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-4 offset-4">
                {attending ? (
                  <div className="alert alert-success text-center" role="alert">
                    Attending!
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="labelMargin">Forename: </label>
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
                <label className="labelMargin">Surname: </label>
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
                <label className="labelMargin">Guest Group ID: </label>
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
                <label className="labelMargin">Reception only: </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="checkbox"
                  value={receptionOnly}
                  onChange={this.handleChangeInputreceptionOnly}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="labelMargin">Starter</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  disabled="disabled"
                  value={starterText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="labelMargin">Main Course</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  disabled="disabled"
                  value={mainCourseText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="labelMargin">Dietary Note</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  disabled="disabled"
                  value={dietaryNote}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="labelMargin">Song Artist</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  disabled="disabled"
                  value={songArtist}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="labelMargin">Song Name</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  disabled="disabled"
                  value={songName}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <QRCode
                  value={qrCodeString}
                  bgColor="red"
                  fgColor="black"
                  size="256"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={this.handleUpdateGuest}
                >
                  Update Guest
                </button>
                <a className="btn btn-danger ml-2" href={"/guest/list"}>
                  Cancel
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GuestUpdate;
