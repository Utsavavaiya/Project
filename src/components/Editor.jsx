import React from "react"
import Input_cont from "./Input_cont";


let glob_obj = {
        name: "",
        command: "",
        text: "",
        isTesting: "",
        htmlElement: ""
}

    function update(obj){
        glob_obj = {...glob_obj,...obj}
        console.log(glob_obj)
    }

function Editor(){

    function saveAsNew(){
        axios.post("http://localhost:3000/db",glob_obj)
    }

    // function save(){
    //     axios.put("http://localhost:3000/db?name={global_obj}",glob_obj)
    // }

    return(
        <div>
            <Input_cont
                type="name"
                update={update}
                 />
            <Input_cont
                 type="command"
                 update={update}
                  />
            <Input_cont
                 type="text"
                 update={update}
                  />
            <Input_cont
                 type="isTesting"
                 update={update}
                  /> 
            <Input_cont
                 type="htmlElement"
                 update={update}
                  />
            <button onClick={saveAsNew}>save as new</button>
        </div>
    );
}

export default Editor;