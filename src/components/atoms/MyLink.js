function MyLink(props){
    return(
        <a href = {props.href}
            target = {props.target}>
            {props.children}
        </a>
    )
}

export default MyLink