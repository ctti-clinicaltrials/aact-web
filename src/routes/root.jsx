import { Link, Outlet } from 'react-router-dom';
import ConnectPage from '../components/ConnectPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import HomePage from '../components/HomePage'
import image from '../images/full_logo.jpg'


export default function Root() {
  return (
    <div>
      <Header2/>
      <div className='container'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}
