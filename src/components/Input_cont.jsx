import React,{useState , useEffect } from "react"


function Input_cont(props){

    const [inputs,setInputs]=useState()

    props.update(inputs)

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(({...inputs,[name]:value}))       
    }

    return (
        <div>
            <div>{props.type}</div>
            <div>:</div>
            <input type='text' name={props.type} placeholder={props.defaultVal} onChange={handleChange}></input>
        </div>
    );
}

export default Input_cont;