import { Accordion } from "react-bootstrap"
function CustomAccordion(props) {
    console.log(props);
    return (
        <Accordion className='w-75 m-1' defaultActiveKey="1">
            <Accordion.Item >
                <Accordion.Header>{props.header}</Accordion.Header>
                <Accordion.Body>{props.body}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
} 
export default CustomAccordion