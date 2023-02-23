import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Prescriptions from "../Prescriptions";
import { Link } from "react-router-dom";
import Users from "../Users";

function AdminDashBoard() {
    return (
        <div>
            <Container>
                <Row>
                    <Col><Link>Users</Link></Col>
                    <Col>Users</Col>
                    <Col>Users</Col>
                    <Col>Users</Col>
                    <Col>Users</Col>
                    <Col>Users</Col>
                    <Col>Users</Col>
                </Row>
            </Container>
            <Tabs>
                <TabList>
                    <Tab>Users</Tab>
                    <Tab>Appointments</Tab>
                    <Tab>Prescriptions</Tab>
                    <Tab>Diagnosis</Tab>
                    <Tab>Lab Test</Tab>
                    <Tab>Logs</Tab>
                    <Tab>Insurance</Tab>
                    <Tab>Insurance Policies</Tab>
                    <Tab>Insurance Claims</Tab>
                </TabList>
                <TabPanel>
                    <Users/>
                </TabPanel>
                <TabPanel>
                    <h2>Appointments Details</h2>
                </TabPanel>
                <TabPanel>
                    <Prescriptions/>
                </TabPanel>
                <TabPanel>
                    <h2>Diagnosis Details</h2>
                </TabPanel>
                <TabPanel>
                    <h2>LabTest Details</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Logs Details</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Insurance Details</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Insurance Policies Details</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Insurance Claims Details</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
export default AdminDashBoard