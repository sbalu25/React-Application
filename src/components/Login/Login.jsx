import React, { useEffect, useState } from "react";
import styles from './Login.module.css';
import { Button, Container, Col, Form } from "react-bootstrap";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useDispatch, useSelector } from "react-redux";
import { STORE_DETAILS, STORE_TOKEN } from "../../store/userdetails";
import { useNavigate } from 'react-router-dom'
function Login() {
    const [userName, setUserName] = useState(0)
    const [password, setPassword] = useState(0)
    const [isValid, setValidation] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const token = useSelector((state) => state.token)

    async function continueToLogin() {
        console.log(userName, password);
        try {
            const response = await fetch("http://localhost:8090/user/login",
                {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({ userName: userName, password: password })
                }
            )
            const result = await response.json()
            dispatch({ type: STORE_TOKEN, payload: result.token })
            dispatch({ type: STORE_DETAILS, payload: result.user })
            // navigateToDashboard();
            navigate('/admin')
        }
        catch (error) {
            console.log(error);
        }



    }


    useEffect(() => {
        const valid = userName?.length > 0 && password?.length > 0
        setValidation(valid)
    }, [userName, password])
    return (
        <Container>
            <Col>
                <h5>Secure Hospital System</h5>
            </Col>
            <Button variant="secondary" className={`${styles.button}`}>Register<span><ArrowForwardOutlinedIcon /></span></Button>
            <Form>
                <Form.Group controlId="userName" className="mb-3">
                    <Form.Label>
                        Username:
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => { setUserName(e.target.value) }}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3" >
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control type="password" placeholder="Enter username" onChange={(e) => { setPassword(e.target.value) }}>
                    </Form.Control>
                </Form.Group>
                <Button className={styles.button} disabled={!isValid} onClick={continueToLogin}>Continue to Login</Button>
            </Form>
        </Container>
    )
}
export default Login;