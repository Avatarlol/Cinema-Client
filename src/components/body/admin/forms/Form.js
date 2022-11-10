import React from "react";
import './Form.css'

export function isFormValid(parentElement) {
    for (const element of parentElement){
        if(!element.checkValidity()){
            return false;
        }
      }
      return true;
}

function Form(props) {

    const toggleForm = event => {
        if(props.activeForm.key===props.form.key){
            props.setActiveForm('')
        }else{
            props.setActiveForm(props.form)
        }
    }

    const displayContent = () => {

        return(
            <div className="content">
            {props.form.content}
            </div>
        )
    }

    return ( 
        <div className="form">
            <button id={props.form.key} onClick={toggleForm} >{props.form.title}</button>
            {props.activeForm.key===props.form.key ? displayContent() : ''}
        </div>
     );
}

export default Form;