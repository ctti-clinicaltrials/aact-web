import { Link } from 'react-router-dom';
import ConnectPage from '../components/ConnectPage';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import HomePage from '../components/HomePage'
import image from '../images/full_logo.jpg'


export default function Root() {
  return (
    <div className="App container">
      <Link to={`test_route_name`}></Link>
      <Header/>
      {/* <Header2/> */}
      
      <ConnectPage/>
      {/* <HomePage /> */}
    </div>
  );
}
