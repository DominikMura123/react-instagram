function MyButton(props){
    return(
        <button
            type = {props.type ? props.type : 'button'}
            onClick = {props.onClick}
        >
            {props.children}
        </button>
    )
}

export default MyButton