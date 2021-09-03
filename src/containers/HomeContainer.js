import React, { Component } from 'react';
import TableComponent from '../components/TableComponent';
import {connect} from 'react-redux';
import { deleteUsersDetail, getUsersList } from '../actions/userAction';


class HomeContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersList())
        this.props.dispatch(deleteUsersDetail())
    }
    render() {
        return (
            <div>
                <TableComponent />
            </div>
        )
    }
}

export default connect()(HomeContainer)
