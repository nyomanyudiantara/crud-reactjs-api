import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import {Link} from 'react-router-dom';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const BackComponent = props => {
    return (
        <Row className="mb-2">
            <Col>
                <Link to={"/"}>
                    <Button style={{margin: "10px"}} color="dark">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}

BackComponent.propTypes = {

}

export default BackComponent

