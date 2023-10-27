import { useState } from 'react';
import '../styles/Experience.css'

function ExpForm({data, dataHandler, exp, setEditMode}){

    let [formData, setFormData] = useState(exp);

    function companyHandler(e){
        let temp = {...formData, company: e.target.value};
        setFormData(temp);
    }
    function positionHandler(e){
        let temp = {...formData, position: e.target.value};
        setFormData(temp);
    }
    function descriptionHandler(e){
        let temp = {...formData, description: e.target.value};
        setFormData(temp);
    }
    function startHandler(e){
        let temp = {...formData, start: e.target.value};
        setFormData(temp);
    }
    function endHandler(e){
        let temp = {...formData, end: e.target.value};
        setFormData(temp);
    }
    function locationHandler(e){
        let temp = {...formData, location: e.target.value};
        setFormData(temp);
    }

    function saveHandler(){
        let templist = [...data];
        let id = formData.id;
        let filteredEducation = templist.filter(edu => edu.id != id);
        filteredEducation.push(formData);
        dataHandler(filteredEducation);
        setEditMode(false);
    }

    function cancelHandler(){
        let temp = {...exp};
        setFormData(temp);
        setEditMode(false);
    }

    function removeHandler(){
        let filteredExperience = data.filter(item => item.id != exp.id);
        dataHandler(filteredExperience);
        setEditMode(false);
    }

    return (
        
        <div className="exp-details">
            <hr />
            <br />
            <form id="exp-details-form">
                <h5>Company Name</h5>
                <input type="text" placeholder="" name="company" value={formData.company} onChange={companyHandler}/>
                <h5>Position Title</h5>
                <input type="text" placeholder="" name="position" value={formData.position} onChange={positionHandler}/>
                <h5>Description</h5>
                <textarea type="text" placeholder="" name="description" value={formData.description} onChange={descriptionHandler}/>
                <div className='duration'>
                    <h5>Start Date</h5>
                    <input type="text" placeholder="" name="start" value={formData.start} onChange={startHandler}/>
                    <h5>End Date</h5>
                    <input type="text" placeholder="" name="end" value={formData.end} onChange={endHandler}/>
                </div>
                <h5>Location</h5>
                <input type="text" placeholder="" name="location" value={formData.location} onChange={locationHandler}/>
                <div className='inside-buttons'>   
                    <button type="button" onClick={saveHandler}>Save</button>
                    <button type="button" onClick={cancelHandler}>Cancel</button>
                    <button type="button" onClick={removeHandler} className='red'>Remove</button>
                </div>
            </form>
            <br />
            <hr />
        </div>
    )
}

function ExpItem({exp, dataHandler, data}){

    const [editMode, setEditMode] = useState(false);

    function handleEdit(){
        setEditMode(true);
    }

    if (!editMode){
        return (
            <div className="exp" onClick={handleEdit}>
                <h4>{exp.company}</h4>
            </div>
        )
    }

    return (
        <ExpForm data={data} dataHandler={dataHandler} exp={exp} setEditMode={setEditMode}/>
    )
}

function AddExp({data, dataHandler, setAddExp}){

    let initData = {
        id: Math.random()*1000,
        company: '',
        description: '',
        location: '',
        start: '',
        end: '',
    }

    let [formData, setFormData] = useState(initData);

    function companyHandler(e){
        let temp = {...formData, company: e.target.value};
        setFormData(temp);
    }
    function positionHandler(e){
        let temp = {...formData, position: e.target.value};
        setFormData(temp);
    }
    function descriptionHandler(e){
        let temp = {...formData, description: e.target.value};
        setFormData(temp);
    }
    function startHandler(e){
        let temp = {...formData, start: e.target.value};
        setFormData(temp);
    }
    function endHandler(e){
        let temp = {...formData, end: e.target.value};
        setFormData(temp);
    }
    function locationHandler(e){
        let temp = {...formData, location: e.target.value};
        setFormData(temp);
    }

    function saveHandler(){
        let templist = [...data];
        templist.push(formData);
        dataHandler(templist);
        setAddExp(false);
    }

    function cancelHandler(){
        setAddExp(false);
    }
    return (
        <div className="exp-details">
            <hr />
            <br />
            <form id="exp-details-form">
                <h5>Company Name</h5>
                <input type="text" placeholder="" name="company" value={formData.company} onChange={companyHandler}/>
                <h5>Position Title</h5>
                <input type="text" placeholder="" name="position" value={formData.position} onChange={positionHandler}/>
                <h5>Description</h5>
                <textarea type="text" placeholder="" name="description" value={formData.description} onChange={descriptionHandler}/>
                <div className='duration'>
                    <h5>Start Date</h5>
                    <input type="text" placeholder="" name="start" value={formData.start} onChange={startHandler}/>
                    <h5>End Date</h5>
                    <input type="text" placeholder="" name="end" value={formData.end} onChange={endHandler}/>
                </div>
                <h5>Location</h5>
                <input type="text" placeholder="" name="location" value={formData.location} onChange={locationHandler}/>
                <div className='inside-buttons'>   
                    <button type="button" onClick={saveHandler}>Save</button>
                    <button type="button" onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
            <br />
            <hr />
        </div>
    )
}

function Experience(props){
    let expList = props.data.map(exp => <ExpItem key={exp.company} exp={exp} dataHandler={props.dataHandler} data={props.data}/>);

    const[addExp, setAddExp] = useState(false);

    function addHandler(){
        setAddExp(true);
    }

    return (
        <div className="experience">
            <h2>Experience</h2>
            <br />
            {expList}
            <br />
            {addExp && <AddExp data={props.data} dataHandler={props.dataHandler} setAddExp={setAddExp}/>}
            <button className='add-button' onClick={addHandler}>Add</button>
        </div>
    )
}

export default Experience;