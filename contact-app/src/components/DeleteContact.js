import React from "react";

class  DeleteContact  extends React.Component {
    constructor(props){
        super(props)
        const { id, name, email } = props.location.state.contact;
        this.state = {
            id,
            name,
            email,
        };
    }

    Delete = (e) => {   
        e.preventDefault();
        if(this.state.name === "" || this.state.mail === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.DeleteContactHandler(this.state);
        this.setState({name: "", email: "" });
        this.props.history.push("/");
    };
    render() {
        return (
            <div className="ui main">
                <h2 style={{paddingTop:"50px"}}>Delete Contact</h2>
                <form className="ui form" onSubmit= {this.Delete}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value= {this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value= {this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}  />
                             </div>
                            <button className="ui button blue">Delete</button>
                </form>
            </div>
        );
    }
}

export default DeleteContact;