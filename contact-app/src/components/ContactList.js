import React, { useRef } from "react";
import {Link} from "react-router-dom"
import ContactCard from  "./ContactCard";

const ContactList  = (props) =>  {
    const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
        <ContactCard
         contact={contact} 
         clickHandler={deleteContactHandler} 
         key={contact.id}
         />
         );
    });

    const getSearchTerm = () =>{
        props.searchkeyword(inputEl.current.value);
    };
    return (
        <div class="main">
            <h2 style={{paddingTop:"50px"}}>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right" style={{float:"Right"}}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl} 
                        type="text" 
                        placeholder="Search Contacts" 
                        className="prompt" 
                        value={props.term} 
                        onChange= {getSearchTerm}
                    />
                    <i className="search icon"></i> 
                </div>
            </div>
             <div className="ui celled list">{renderContactList.length >0 ? renderContactList: "No Contacts available"}</div>
        </div>
    );
};
export default ContactList;