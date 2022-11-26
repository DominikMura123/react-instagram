import { Link } from 'react-router-dom'
import MyButton from '../atoms/MyButton.js'

function MessagesList(props){
    return(
        <ul>
        {
          props.messages.map(message => {
            return (
              <li key={message.id}>
                {message.message} - <strong>{message.author}</strong>
                <MyButton
                  onClick = {() => props.handleRemove(message.id)}
                >
                delete
                </MyButton>

                <Link to= {`/edit/${message.id}`}>
                <MyButton 
                >
                  edit
                </MyButton>
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
}

export default MessagesList