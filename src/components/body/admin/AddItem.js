import React from "react";
import { useState } from "react";
import Form from "./forms/Form";
import MovieForm from "./forms/movieform/MovieForm";


function AddItem() {

    const forms = [
        {
            key: '0',
            title: 'Movies',
            content: <MovieForm/>
        },
        {
            key: '1',
            title: 'Events',
            content: <div> events form here </div>
        },
        {
            key: '2',
            title: 'Theaters',
            content: <div> theaters form here</div>
        }
    ]

    const [activeForm, setActiveForm] = useState('')

    return ( 
        <React.Fragment>
            {forms.map(form => {return(
                <Form form={form} setActiveForm={setActiveForm} activeForm={activeForm}/>
            )})}
            {/* <Form form={forms[0]} setActiveForm={setActiveForm} activeForm={activeForm}/> */}
        </React.Fragment>
     );
}

export default AddItem;