import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "react-router-dom";
function TopNavigation() {
    return (
        <div>
            <Row className="m-3">
                <Col><Link to="/admin">Users</Link></Col>
                <Col><Link>Appointments</Link></Col>
                <Col><Link to="/admin/prescriptions">Prescriptions</Link></Col>
                <Col><Link>Diagnosis</Link></Col>
                <Col><Link>Lab Tests</Link></Col>
                <Col><Link>Logs</Link></Col>
                <Col><Link>Insurance</Link></Col>
                <Col><Link>Insurance Policies</Link></Col>
                <Col><Link>Insurance Claims</Link></Col>
            </Row>
        </div>
    )
}
export default TopNavigation;