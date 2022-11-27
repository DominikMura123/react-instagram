import { Link } from 'react-router-dom';

function Footer(){
    return(
        <nav>
        <ul>
          <li>
            <Link to='/'>
              Main
            </Link>
          </li>
          <li>
            <Link to='/add'>
              Add
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Footer