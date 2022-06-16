import classes from './AppointmentList.module.css';
import AppointmentItem from './AppointmentItem';
import Card from '../ui/Card';
import AppointmentsFor from './AppointmentsFor';

function AppointmentList(props) {
    return ( <ul className={classes.list}>
        <br></br>
        <Card>
        <AppointmentsFor></AppointmentsFor>
        </Card>
        <Card>
        {props.appointments.map((appointment) => ( <AppointmentItem key={appointment.id} 
        id={appointment.id} 
        image={appointment.image} 
        title={appointment.title} 
        address={appointment.address} 
        description={appointment.description}/>))}
        </Card>
    </ul>
    );
}
export default AppointmentList;