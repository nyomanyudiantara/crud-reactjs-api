import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import { connect } from "react-redux";
import { addUserDetails } from '../actions/userAction';
import swal from 'sweetalert';

const mapStateToProps = (state /*, ownProps */) => {
    return {
        addUserDetails: state.users.addUserDetails,
        errorAddUserDetails: state.users.errorAddUserDetails
    }
  }


class CreateUserContainer extends Component {
    handleSubmit(data) {
        this.props.dispatch(addUserDetails(data))
    }
    render() {
        if(this.props.addUserDetails) {
            swal("Product Created!", "Has been saved successfully with name: "+ this.props.addUserDetails.name, "success");
        } if(this.props.errorAddUserDetails) {
            swal("Error!", this.props.errorAddUserDetails, "error");
        }
        return (
            <Container>
                <BackComponent/>
                <h1>Create Product</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(CreateUserContainer)
