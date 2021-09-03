import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'
import {connect} from 'react-redux';
import FormComponent from '../components/FormComponent'
import { editUserDetails, getUsersDetail } from '../actions/userAction';
import swal from 'sweetalert';


const mapStateToProps = (state /*, ownProps */) => {
    return {
        addUserDetails: state.users.addUserDetails,
        errorAddUserDetails: state.users.errorAddUserDetails
    }
  }

class EditUserContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersDetail(this.props.match.params.id))
    }
    handleSubmit(data) {
        this.props.dispatch(editUserDetails(data, this.props.match.params.id))
    }
    render() {
        if(this.props.addUserDetails) {
            swal("Product Updated!", "Product with name: "+ this.props.addUserDetails.name, "success");
        } if(this.props.errorAddUserDetails) {
            swal("Error!", this.props.errorAddUserDetails, "error");
        }
        return (
            <Container>
                <BackComponent/>
                <h1>Edit Product</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(EditUserContainer)