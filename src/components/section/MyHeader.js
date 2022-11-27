import { Link } from 'react-router-dom'

function MyHeader(props){
    return(
        <header>
        <h1>{props.h1Text}</h1>
        <nav>
          <ul>
            <li>
              <Link to='/add'>
                Daj nowy post
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
      </header>
    )
}

export default MyHeader