function personalInfo(props) {
    return (
        <div>
            <input placeholder="First Name" onChange={props.setFirstName} defaultValue={props.details.firstName}></input>
            <input placeholder="Last Name" onChange={props.setLasttName} defaultValue={props.details.lastName}></input>
            <input placeholder="Email" onChange={props.setEmail} defaultValue={props.details.email}></input>
            <input placeholder="Phone Number" onChange={props.setPhone} defaultValue={props.details.phone}></input>
        </div>
    )
}

export default personalInfo;