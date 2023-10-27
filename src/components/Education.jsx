import { useState } from 'react';
import '../styles/Education.css'

function SchoolForm({data, dataHandler, school, setEditMode}){

    let [formData, setFormData] = useState(school);

    function schoolHandler(e){
        let temp = {...formData, school: e.target.value};
        setFormData(temp);
    }
    function degreeHandler(e){
        let temp = {...formData, degree: e.target.value};
        setFormData(temp);
    }
    function gradeHandler(e){
        let temp = {...formData, grade: e.target.value};
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

    function saveHandler(){
        let templist = [...data];
        let id = formData.id;
        let filteredEducation = templist.filter(edu => edu.id != id);
        filteredEducation.push(formData);
        dataHandler(filteredEducation);
        setEditMode(false);
    }

    function cancelHandler(){
        let temp = {...school};
        setFormData(temp);
        setEditMode(false);
    }

    function removeHandler(){
        let filteredEducation = data.filter(edu => edu.id != school.id);
        dataHandler(filteredEducation);
        setEditMode(false);
    }

    return (
        
        <div className="school-details">
            <hr />
            <br />
            <form id="school-details-form">
                <h5>School</h5>
                <input type="text" placeholder="" name="school" value={formData.school} onChange={schoolHandler}/>
                <h5>Degree</h5>
                <input type="text" placeholder="" name="degree" value={formData.degree} onChange={degreeHandler}/>
                <h5>Grade</h5>
                <input type="text" placeholder="" name="grade" value={formData.grade} onChange={gradeHandler}/>
                <div className='duration'>
                    <h5>Start Date</h5>
                    <input type="text" placeholder="" name="start" value={formData.start} onChange={startHandler}/>
                    <h5>End Date</h5>
                    <input type="text" placeholder="" name="end" value={formData.end} onChange={endHandler}/>
                </div>
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

function School({school, dataHandler, data}){

    const [editMode, setEditMode] = useState(false);

    function handleEdit(){
        setEditMode(true);
    }

    if (!editMode){
        return (
            <div className="school" onClick={handleEdit}>
                <h4>{school.school}</h4>
            </div>
        )
    }

    return (
        <SchoolForm data={data} dataHandler={dataHandler} school={school} setEditMode={setEditMode}/>
    )
}

function AddEducation({data, dataHandler, setAddEdu}){

    let initData = {
        id: Math.random()*1000,
        school: '',
        degree: '',
        grade: '',
        start: '',
        end: '',
    }

    let [formData, setFormData] = useState(initData);

    function schoolHandler(e){
        let temp = {...formData, school: e.target.value};
        setFormData(temp);
    }
    function degreeHandler(e){
        let temp = {...formData, degree: e.target.value};
        setFormData(temp);
    }
    function gradeHandler(e){
        let temp = {...formData, grade: e.target.value};
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

    function saveHandler(){
        let templist = [...data];
        templist.push(formData);
        dataHandler(templist);
        setAddEdu(false);
    }

    function cancelHandler(){
        setAddEdu(false);
    }
    return (
        <div className="school-details">
            <hr />
            <br />
            <form id="school-details-form">
                <h5>School</h5>
                <input type="text" placeholder="" name="school" value={formData.school} onChange={schoolHandler}/>
                <h5>Degree</h5>
                <input type="text" placeholder="" name="degree" value={formData.degree} onChange={degreeHandler}/>
                <h5>Grade</h5>
                <input type="text" placeholder="" name="grade" value={formData.grade} onChange={gradeHandler}/>
                <div className='duration'>
                    <h5>Start Date</h5>
                    <input type="text" placeholder="" name="start" value={formData.start} onChange={startHandler}/>
                    <h5>End Date</h5>
                    <input type="text" placeholder="" name="end" value={formData.end} onChange={endHandler}/>
                </div>
                <div className='inside-buttons'>   
                    <button type="button" onClick={saveHandler}>Save</button>
                    <button type="button" onClick={cancelHandler} className='red'>Cancel</button>
                </div>
            </form>
            <br />
            <hr />
        </div>
    )
}

function Education(props){
    let schoolList = props.data.map(school => <School key={school.school} school={school} dataHandler={props.dataHandler} data={props.data}/>);

    const[addEdu, setAddEdu] = useState(false);

    function addHandler(){
        setAddEdu(true);
    }

    return (
        <div className="education">
            <h2>Education</h2>
            <br />
            {schoolList}
            <br />
            {addEdu && <AddEducation data={props.data} dataHandler={props.dataHandler} setAddEdu={setAddEdu}/>}
            <button className='add-button' onClick={addHandler}>Add</button>
        </div>
    )
}

export default Education;