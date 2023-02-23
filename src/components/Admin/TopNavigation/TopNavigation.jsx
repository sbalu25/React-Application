import { Row, Col } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
function TopNavigation() {
    return (
        <div className=" w-100 m-3">
            <Row className="m-3">
                <Col><Link to="/admin">Users</Link></Col>
                <Col><Link to="/admin/appointments">Appointments</Link></Col>
                <Col><Link to="/admin/prescriptions">Prescriptions</Link></Col>
                <Col><Link>Diagnosis</Link></Col>
                <Col><Link>Lab Tests</Link></Col>
                <Col><Link>Insurance</Link></Col>
                <Col><Link>Insurance Claims</Link></Col>
                <Col><Link>Insurance Policies</Link></Col>
            </Row>
        </div>
    )
}
export default TopNavigation
