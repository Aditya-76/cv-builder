import '../styles/Resume.css'

export default function Resume(props){

    let educationList = props.ed.map(item => {
        return (
            <div className="education-item" key={item.school}>
                <div className='education-duration'>
                    <div>{item.start}-{item.end}</div>
                    <div><b>{item.grade}</b></div>
                </div>
                <div className='education-details'>
                    <h4>{item.school}</h4>
                    <div>{item.degree}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="resume">
            <div className="top-section">
                <h1>{props.pd.name}</h1>
                <br />
                <div className="contact-info">
                    <p>{props.pd.email}</p>
                    <p>{props.pd.phone}</p>
                    <p>{props.pd.address}</p>
                </div>
            </div>
            <div className="main-content">
                <div className="education-content">
                    <h3>Education</h3>
                    {educationList}
                </div>
            </div>
        </div>
    )
}