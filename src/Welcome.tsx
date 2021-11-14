
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import App from './App'
import './welcome.css'
import imageHome from './img/home.png'
import imageToDo from './img/todo.gif'

export default function Welcome() {

  return (
    <Router>
      
      <Navigation/>

    </Router>
  );
}

function Home() {
  return (
    <div>
      {/* <Link to="/todos">ToDo's</Link> */}
      <h1>Welcome to</h1>
      <img src={imageToDo} alt="todo images"></img>
    </div>
  )
}

function Navigation() {
  const { pathname } = useLocation();
  console.log(pathname);
  
  return (<>
  {/* <nav>
      <ul>
        { (pathname !== '/') &&
        <li>
            <Link to="/" ><img className='home' src={imageHome} alt='home'/></Link>
        </li>
        }
        { (pathname !== '/todos') &&
        <li>
        <Link to="/todos">ToDo's</Link>
      </li>
        }
          
        </ul>
      </nav> */}
    <nav>
      <ul>
        { (pathname !== '/') ?
        <li>
            <Link to="/" ><img className='home' src={imageHome} alt='home'/></Link>
        </li>
        :
        <li>
        <Link to="/todos">ToDo's</Link>
      </li>
        }
          
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<App />} />
    </Routes>
    </>)
}