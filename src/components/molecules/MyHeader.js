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
          </ul>
        </nav>
      </header>
    )
}

export default MyHeader