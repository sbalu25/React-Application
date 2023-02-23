import { useEffect, useState } from "react";
import { useTable } from "react-table";
import { USERCOLUMNS } from "./UserColumns";
import { Container, Row, Col } from "react-bootstrap";
function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUsers() {
            const response = await fetch('http://localhost:8090/user/users')
            const result = await response.json()
            console.log(result)
            setUsers(result)
        }
        getUsers()
    }, [])
    return (
        <div>
        <Container>
            <Row>
                <Col className="bold">First Name</Col>
                <Col>Last Name</Col>
                <Col>Mobile Number</Col>
                <Col>Email</Col>
                <Col>Role</Col>
            </Row>
        </Container>
        <Container className="w-100"> 
            {users?.map((user) =>
                <Row className="w-100" key={user.id}>
                        <Col sm="3">{user.first_name}</Col>
                        <Col sm="2">{user.last_name}</Col>
                        <Col sm="2">{user.mobile_number}</Col>
                        <Col sm="3">{user.email}</Col>
                        <Col sm="1">{user.role}</Col>
                </Row>
            )}
        </Container>
        </div>


    )
}
export default Users;