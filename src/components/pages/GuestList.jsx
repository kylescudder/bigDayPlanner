import React, { Component, useEffect, useState } from "react";
import ReactTable from "react-table";
import api from "../../api";
import "react-table/react-table.css";
import Loading from "../misc/Loading";

class UpdateGuest extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/guest/update/${this.props.id}`;
  };

  render() {
    return (
      <div className="btn-update" onClick={this.updateUser}>
        Update
      </div>
    );
  }
}

class DeleteGuest extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the guest ${this.props.id} permanently?`
      )
    ) {
      deleteGuest(this.props.id)
    }
    async function deleteGuest(id) {
      await api.deleteGuestById(id);
      window.location.reload();
    }
  };

  render() {
    return (
      <div className="btn-delete" onClick={this.deleteUser}>
        Delete
      </div>
    );
  }
}
const addGuest = (event) => {
  event.preventDefault();

  window.location.href = `/guest/add`;
};

function GuestList() {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getGuestData() {
      try {
        const res = await api.getAllGuests();
        const data = res.data.data;
        data.forEach(element => {
          if (element.attending === false) {
            element.attending = 'No'
          } else {
            element.attending = 'Yes'
          }
        });
        setGuests(data);
        setIsLoading(false);
      } catch (err) {
        window.location.href = `/login`;
      }
    }

    getGuestData();
  }, []);

  const columns = [
    {
      Header: "ID",
      accessor: "_id",
      filterable: true,
    },
    {
      Header: "Forename",
      accessor: "forename",
      filterable: true,
    },
    {
      getProps: (state, rowInfo) => {
        if (rowInfo && rowInfo.row) {
          return {
            style: {
              background: rowInfo.row.attending === "Yes" ? "lightgreen" : 'lightpink',
              color: rowInfo.row.attending === "Yes" ? "green" : 'red',
            },
          };
        } else {
          return {};
        }
      },
      Header: "Attending",
      accessor: "attending",
      filterable: true,
    },
    {
      Header: "Surname",
      accessor: "surname",
      filterable: true,
    },
    {
      Header: "Group ID",
      accessor: "guestGroupID",
      filterable: true,
    },
    {
      Header: "",
      accessor: "",
      Cell: function (props) {
        return (
          <span>
            <DeleteGuest id={props.original._id} />
          </span>
        );
      },
    },
    {
      Header: "",
      accessor: "",
      Cell: function (props) {
        return (
          <span>
            <UpdateGuest id={props.original._id} />
          </span>
        );
      },
    },
  ];
  let showTable = true;
  if (!guests.length) {
    showTable = false;
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="row">
            <div className="col">
              <div
                className="btn btn-success float-right mb-2"
                onClick={addGuest}
              >
                Add Guest
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {!guests.length ? (
                <div>
                  <div class="card">
                    <div class="card-body">
                      Please add some guests
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {showTable && (
                    <ReactTable
                      data={guests}
                      columns={columns}
                      loading={isLoading}
                      defaultPageSize={10}
                      showPageSizeOptions={true}
                      minRows={0}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default GuestList;
