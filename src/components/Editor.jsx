import React,{useState} from "react"
import Input_cont from "./Input_cont";
import { useParams } from "react-router-dom";
import { useCallback , useEffect } from "react";

let glob_obj = {
        name: "",
        command: "",
        text: "",
        isTesting: "",
        htmlElement: ""
}


    function update(obj){
        glob_obj = {...glob_obj,...obj}``
    }

function Editor(){

    const [getObj,setGetObj] = useState(null)

    const {id} = useParams();

    function saveAsNew(){
        axios.post("http://localhost:3000/db",glob_obj)
    }

    function save(){
        axios.put(`http://localhost:3000/db/${id}`,glob_obj)
    }

    useEffect(function (){
        axios.get(`http://localhost:3000/db/${id}`).then(function (response) {
        setGetObj(response.data)
    })
    },[id]);

    return(
        getObj === null ? <p>loading..</p> : <div>
        <Input_cont
            type="name"
            defaultVal={getObj.name}
            update={update}
             />
        <Input_cont
             type="command"
             defaultVal={getObj.command}
             update={update}
              />
        <Input_cont
             type="text"
             defaultVal={getObj.text}
             update={update}
              />
        <Input_cont
             type="isTesting"
             defaultVal={getObj.isTesting===false? "false" : "true"}
             update={update}
              /> 
        <Input_cont
             type="htmlElement"
             defaultVal={getObj.htmlElement}
             update={update}
              />
        <button onClick={saveAsNew}>save as new</button>
        <button onClick={save}>save</button>
    </div>
    );


}

export default Editor;