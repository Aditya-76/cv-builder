import '../styles/PersonalDetails.css'

function PersonalDetails(props) {

    function handleName(event){
        let temp = {...props.data, name: event.target.value};
        props.dataHandler(temp);
    }

    function handleEmail(event){
        let temp = {...props.data, email: event.target.value};
        props.dataHandler(temp);
    }

    function handlePhone(event){
        let temp = {...props.data, phone: event.target.value};
        props.dataHandler(temp);
    }

    function handleAddress(event){
        let temp = {...props.data, address: event.target.value};
        props.dataHandler(temp);
    }

    return (
        <div className="personal-details">
            <h2>Personal Details</h2>
            <br />
            <form id="personal-details-form">
                <h5>Full Name</h5>
                <input type="text" placeholder="Enter full name" name="fullName" value={props.data.name} onChange={handleName}/>
                <h5>Email</h5>
                <input type="text" placeholder="Enter email" name="email" value={props.data.email} onChange={handleEmail}/>
                <h5>Phone Number</h5>
                <input type="text" placeholder="" name="phone" value={props.data.phone} onChange={handlePhone}/>
                <h5>Address</h5>
                <input type="text" placeholder="" name="address" value={props.data.address} onChange={handleAddress}/>
            </form>
        </div>
    )
}

export default PersonalDetails;