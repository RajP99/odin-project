function personalInfo(props) {
    return (
        <div>
            <input placeholder="First Name" onChange={props.setFirstName} value={props.details.firstName}></input>
        </div>
    )
}