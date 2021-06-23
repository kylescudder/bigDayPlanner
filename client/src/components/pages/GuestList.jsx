import React, {
  Component,
  useEffect,
  useState,
} from "react";
import ReactTable from "react-table";
import api from "../../api";
import "react-table/react-table.css";

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

  useEffect(() => {
    async function getGuestData() {
        try {
            setIsLoading(true);
            const res = await api.getAllGuests();
            const data = res.data.data
            setGuests(data);
            setIsLoading(false);
            setGuests(data);
            setIsLoading(false);      
        } catch (err) {
            console.log(err)
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
      Header: "Name",
      accessor: "forename",
      filterable: true,
    },
    {
      Header: "Name",
      accessor: "surname",
      filterable: true,
    },
    {
      Header: "Rating",
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
//   if (!guests.length) {
//     showTable = false;
//   }
  const { userData } = useContext(UserContext);
  const history = useHistory();

  return (
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
  );
}
export default GuestList;
