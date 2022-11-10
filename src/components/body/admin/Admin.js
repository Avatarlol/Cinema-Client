import React, {useState} from "react";
import NavBar from "../../navBar/NavBar";
import SubTabs from "../../subTabs/SubTabs";
import Body from "../Body";
import AddItem from "./AddItem";
import './Admin.css'

function Admin() {

    const tabs = [
        {
            key: '0',
            title: 'Add Items',
            content: <AddItem/>
        },
        {
            key: '1',
            title: 'Modify Items',
            content: <div>modify stuffs here</div>
        },
    ]

    const [activeTab, setActiveTab] = useState('0')



    return ( 
        <div className="admin-container">
            {/* <NavBar setActiveTab={setActiveTab} tabs={tabs}/>
            <Body tabs={tabs}/> */}
            <SubTabs tabs={tabs}/>
        </div>
     );
}

export default Admin;