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
        </ul>
      </nav>
    )
}

export default Footer