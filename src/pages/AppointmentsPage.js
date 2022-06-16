import AppointmentList from "../components/appointments/AppointmentList.js";
import Card from "../components/ui/Card.js";
import Calendar from "react-calendar";
const DUMMY_DATA = [
    {
      id: 'a1',
      title: 'Appointment with Dr. Adams',
      image: 'https://images.squarespace-cdn.com/content/v1/58b72c843a04112a613d2251/1597326999218-V3KMZDILZMCPV2G7VZEN/Emory1.jpg?format=2500w',
      address: 'Ward-3,Emory University Hospital, Atlanta, GA, 30332',
      description:
        'Appointment for Full Blood Profile Consultancy',
    },
    {
      id: 'a2',
      title: 'MRI Scan Due',
      image: 'https://images.adsttc.com/media/images/55f1/9a73/99e9/ba3a/1600/0033/newsletter/jhh_wargo_ext_2.jpg?1441897066',
      address: 'Radiology Ward, Johns Hopkins Hospital, Baltimore, MD',
      description:
        'MRI Scan for L1, L2 backbone due',
    },
    {
      id: 'a3',
      title: 'Lipid Profile Analysis',
      image: 'https://www.ihf-fih.org/wordpress/wp-content/uploads/2020/12/The-Aga-Khan-Univesity-Hospital-web.jpg',
      address: 'Agha Khan University Hospital, Karachi, Pakistan',
      description:
        'Check-ups and Evaluations due for Lipid Profile test results',
    },
    {
      id: 'a4',
      title: 'X-Ray Scan',
      image:
        'https://careers.williams.edu/files/Anastasia-Tishena-Photo2-768x625.jpg',
      address: 'Department of Radiology, NYU Bellvue Hospital, NY',
      description:
        'Chest X-Ray Scan scheduled',
    },
  ];

function AppointmentsPage() {


    return <section>
      
        <h1>
            Recent Appointments
        </h1>
        <Card>
        <Calendar>
        </Calendar>
        </Card>
       <AppointmentList appointments={DUMMY_DATA} />
    </section>
  
}
export default AppointmentsPage;