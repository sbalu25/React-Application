import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from './Home.module.css';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Login from "../Login";
function Home() {
    const [loginForm, setLogin] = useState(false)
    console.log("before setting", loginForm);
    const openLogin = () => {
        setLogin(true);
        console.log("After setting", loginForm);
    }
    if (loginForm) {
        return(
            <div className={`${styles.login}`}>
                <div>
                    <Row className="align-items-center">
                        <Col className="align-items-center">
                        <Login/>
                        </Col>
                        <Col>
                            <div className={styles.right_pane}></div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${styles.login}`}>
                <div>
                    <Row className="align-items-center">
                        <Col className="align-items-center">
                            <Row className={`${styles.column} font-weight bold`}><h5>Secure Hospital System</h5></Row>
                            <Col className={styles.column}>
                                <Container className="m-1">
                                    <Button variant="secondary" className={`${styles.button}`} onClick={openLogin}>Login
                                        <span><ArrowForwardOutlinedIcon /></span>
                                    </Button>
                                </Container>
                            </Col>
                            <Col className={styles.column}>
                                <Container className="m-1">
                                    <Button variant="secondary" className={`${styles.button}`}>Register
                                        <span><ArrowForwardOutlinedIcon /></span>
                                    </Button>
                                </Container>
                            </Col>
                        </Col>
                        <Col>
                            <div className={styles.right_pane}></div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}
export default Home;