import React from 'react'
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const mapStateToProps = (state /*, ownProps */) => {
    return {
      getUsersDetail: state.users.getUsersDetail,
      errorUsersDetail: state.users.errorUsersDetail
    }
  }

function DetailUserComponent(props) {
    return (
        <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th style={{textTransform: "uppercase"}}>Name</th>
          <th style={{textTransform: "uppercase"}}>Qty</th>
          <th style={{textTransform: "uppercase"}}>Picture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.getUsersDetail.id}</th>
          <td>{props.getUsersDetail.name}</td>
          <td>{props.getUsersDetail.qty}</td>
          <td>{props.getUsersDetail.picture}</td>
        </tr>
      </tbody>
    </Table>
    )
}

export default connect(mapStateToProps, null)(DetailUserComponent)

