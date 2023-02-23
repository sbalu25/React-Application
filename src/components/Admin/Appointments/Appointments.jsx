import { Row, Container } from 'react-bootstrap'
import TopNavigation from '../TopNavigation'
import CustomAccordion from '../../Utilities/CustomAccordion'
import { useEffect, useState } from 'react'
function Appointments() {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        async function getAppointments() {
            const response = await fetch("http://localhost:8090/appointments/list")
            const result = await response.json()
            console.log(result)
            setAppointments(result)
        }
        getAppointments()
    }, [])
    return (
        <>
            <TopNavigation />
            <Row>
                <h5>Appointments List</h5>
            </Row>
                {appointments?.map((appointment) => 
                    <CustomAccordion header={`Appointment with ${appointment.doctor_name} on ${new Date(appointment.created_time).toLocaleString()}`} body={`Status: ${appointment.status}`} />
                )}
        </>
    )
}
export default Appointments