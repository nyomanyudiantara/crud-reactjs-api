import React from 'react'


import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faEdit,
    faTrash,
    faUserPlus,
  } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import swal from 'sweetalert'
import { deleteUserDetails } from '../actions/userAction';
import MediaQuery from 'react-responsive';
const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  // this.props.params.id
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this product!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUserDetails(id));
      swal("Poof! Your product data has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your product data is safe!");
    }
  });
}

// getImg = async (cell) => {
//   try {
//     let res = await axios.get('https://613080a48066ca0017fda8f9.mockapi.io/amutan'+cell,{
//       responseType: 'arraybuffer' 
//     });
//     let mimetype="image/jpeg"
//     let x =`data:${mimetype};base64,${btoa(String.fromCharCode(...new Uint8Array(res.data)))}`;
//     console.log(x);
//     return x;
//   } catch (err) {
//     console.log(err);
//   }
// }

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
  }];

const mapStateToProps = (state /*, ownProps */) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList
  }
}

const TableComponent = (props) => {

  const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: () => {
        return {width: "5%", textAlign: "center"};
    },
    style: {
        textAlign: "center"
    },
    sort: true
  }, {
    dataField: 'name',
    text: 'Name',
    sort: true,
    headerStyle: () => {
      return {textAlign: "center", textTransform: "uppercase", width: "10%"}
    }
  }, {
    dataField: 'picture',
    text: 'Image',
    // formatter: async (cell, row) => {
    //   const x = await this.getImg(cell);
    //   return <img src={`${x}`} /> },
    headerStyle: () => {
      return {textAlign: "center"}
    },
    style: {
      fontSize: "12px"
    }
  }, {
    dataField: 'qty',
    text: 'Qty',
    sort: true,
    headerStyle: () => {
      return {textAlign: "center", textTransform: "uppercase", width: "5%"}
    }, 
  },
  {
      dataField: "link",
      text: "Action",
      style: {
          marginRight: "10px"
      },
      headerStyle: () => {
        return {textAlign: "right", textTransform: "uppercase", width: "25%"}
      },
      formatter: (rowContent, row) => {
        return (
          <div style={{float: "right"}}>
            <Link to={"details/"+row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"edit/"+row.id}>
              <Button style={{margin: "10px"}} color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
  
            <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    }
  ];

    return (
        <div>
          <MediaQuery minDeviceWidth={992}>
            <Container>
              {props.getUsersList ? (
                <ToolkitProvider bootstrap4 keyField='id' data={ props.getUsersList } columns={ columns } defaultSorted={ defaultSorted } search>
                    {
                        props => (
                        <div>
                            <Link to={"/create"}>
                              <Button style={{margin: "10px"}} color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faUserPlus} /> Add
                              </Button>
                            </Link>
                            <div style={{float: "right", marginTop: "10px"}}>
                                <SearchBar { ...props.searchProps } />
                            </div>
                            <BootstrapTable
                            { ...props.baseProps } pagination={ paginationFactory() }
                            />
                        </div>
                        )
                    }
                </ToolkitProvider>) : (<center>{props.errorUsersList ? (<h6>{props.errorUsersList}</h6>) : <Spinner color="dark"/> } </center>) }
            </Container>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={991}>
            <Container style={{fontSize: "12px"}}>
              {props.getUsersList ? (
                <ToolkitProvider bootstrap4 keyField='id' data={ props.getUsersList } columns={ columns } defaultSorted={ defaultSorted } search>
                    {
                        props => (
                        <div>
                            <Link to={"/create"}>
                              <Button style={{margin: "10px"}} color="dark" className="mr-2">
                                <FontAwesomeIcon icon={faUserPlus} /> Add
                              </Button>
                            </Link>
                            <div style={{float: "right", marginTop: "10px"}}>
                                <SearchBar { ...props.searchProps } />
                            </div>
                            <BootstrapTable
                            { ...props.baseProps } pagination={ paginationFactory() }
                            />
                        </div>
                        )
                    }
                </ToolkitProvider>) : (<center>{props.errorUsersList ? (<h6>{props.errorUsersList}</h6>) : <Spinner color="dark"/> } </center>) }
            </Container>
            </MediaQuery>
        </div>
    )
}

export default connect(mapStateToProps, null)(TableComponent)
