function Button(props){
    let classNames = "border border-gray-300 text-reddit_dark rounded-full px-3 text-sm font-bold "
    if (props.outline) {
        classNames += "text-gray-200 "
    }
    else{
        classNames += "bg-gray-300 "
    }

    return(
        <button {...props} className={classNames + props.className} />
    )
}

export default Button