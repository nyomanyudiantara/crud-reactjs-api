import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import { getUsersDetail } from '../actions/userAction';
import DetailUserComponent from '../components/DetailUserComponent';

class DetailUserContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersDetail(this.props.match.params.id))
    }
    render() {
        console.log(this.props.match.params.id);
        return (
            <Container>
                <BackComponent/>
                <h1>Product Details</h1>
                <DetailUserComponent/>
            </Container>
        )
    }
}

export default connect()(DetailUserContainer)
