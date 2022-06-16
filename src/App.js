import AppointmentsPage from "./pages/AppointmentsPage";
import { Route, Routes} from 'react-router-dom';
import ProfilePage from "./pages/ProfilePage";
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
      <Routes>
      <Route path='/' element={<ProfilePage />} />
      <Route path='/appointments' element={<AppointmentsPage />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
