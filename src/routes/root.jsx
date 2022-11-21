import { Link } from 'react-router-dom';
import HomePage from '../components/HomePage'


export default function Root() {
  return (
    <div className="App container">
      <Link to={`test_route_name`}>test route page</Link>
      <HomePage />
    </div>
  );
}
