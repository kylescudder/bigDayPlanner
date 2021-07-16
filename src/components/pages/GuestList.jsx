import React, {
  Component,
  useEffect,
  useState,
} from "react";
import ReactTable from "react-table"
import api from "../../api"
import "react-table/react-table.css"
import { useHistory } from "react-router-dom"


class UpdateGuest extends Component {
  updateUser = (event) => {
    event.preventDefault();
    
    window.location.href = `/guest/update/${this.props.id}`;
  };
  
  render() {
    return <div onClick={this.updateUser}>Update</div>;
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
          api.deleteGuestById(this.props.id);
          window.location.reload();
        }
      };
      
      render() {
        return <div onClick={this.deleteUser}>Delete</div>;
      }
    }
    function GuestList() {
      const [guests, setGuests] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const history = useHistory()
const addGuest = (event) => {
  event.preventDefault();

  window.location.href = `/guest/add`;
};
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getGuestData() {
      try {
        const res = await api.getAllGuests();
        const data = res.data.data;
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
          </div>
        </div>
      )}
    </div>
  );
}
export default GuestList;
