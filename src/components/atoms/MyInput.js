function MyInput(props){
    return(
        <input
            type = {props.type ? props.type : "text"}
            value = { props.value }  
            onChange = { props.onChange }
        />
    )
}

export default MyInput