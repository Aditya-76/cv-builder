import '../styles/Options.css'

export default function Options(props){

    function clearHandler(){
        props.data1Handler({name: '', email: '', phone: '', address: ''});
        props.data2Handler([]);
        props.data3Handler([]);

    }

    function exampleHandler(){
        props.data1Handler(props.pd);
        props.data2Handler(props.ed);
        props.data3Handler(props.ex);
    }

    return (
        <div className="options">
            <div className="clear" onClick={clearHandler}>Clear Resume</div>
            <div className="example" onClick={exampleHandler}>Load Example</div>
        </div>
    )
}