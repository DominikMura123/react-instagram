import MyButton from '../atoms/MyButton.js'
import MyInput from '../atoms/MyInput.js'

function MessagesForm(props){
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            Author
            <MyInput
                type = "text" 
                value = {props.authorInput} 
                onChange = {props.handleAuthorChange}
            />
          </label>
          {
          props.isAuthorInputError
            ? <small>Pole author nie moze byc puste </small>
            : null
          }
        </div>
        <div>
          <label>
            Message
            <MyInput
                type = "text" 
                value = {props.messageInput} 
                onChange = {props.handleMessageChange}
            />    
          </label>
          {
          props.isMessageInputError
            ? <small>Pole message musi miec minimum 3 znaki</small>
            : null
          }
        </div>
        <MyButton
            type = 'submit'>
        Send        
        </MyButton>    
      </form>
    )
}

export default MessagesForm