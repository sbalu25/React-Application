import { useEffect } from "react"
import TopNavigation from "../TopNavigation"

function Prescriptions() {
    useEffect(() => {
        console.log("Prescriptions")
    })
    return (
        <>
            <TopNavigation />
            <div>Prescriptions List</div>
        </>

    )
}
export default Prescriptions