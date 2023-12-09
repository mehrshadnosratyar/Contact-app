import { useState } from "react";
import Contacts from "./Contacts";
import styles from "./form.module.css"
import {v4} from "uuid";
function Form (){
    
    const [contactsInfo , setContacts] = useState({id:"", name:"",lname:"",email:"",number:""})
    const [contactProps , setProps] = useState([])
    const [alert,setAlert] = useState("")
    function changeHandeler(event) {
        setContacts( (contactsInfo) => ({...contactsInfo,[event.target.name]:event.target.value}))
    };

    function submitHandler(){
        if(!contactsInfo.name||!contactsInfo.lname||!contactsInfo.email||!contactsInfo.number){
            setAlert("invalid data!")
            return;
        }
        setAlert("")
        const newContact = {...contactsInfo,id:v4()}
        setProps(contacts => ([...contacts,newContact]))
        setContacts({name:"",lname:"",email:"",number:""})
    }

    return(
    <main className={styles.container}>
        <div>
            <h1 className={styles.title}>CONTACT APP</h1>
            <div className={styles.form}>
                <input name="name" type="text" value={contactsInfo.name} placeholder="Name" onChange={changeHandeler} />
                <input name="lname" type="text" value={contactsInfo.lname} placeholder="Last Name"onChange={changeHandeler}/>
                <input name="email" type="email" value={contactsInfo.email} placeholder="Email" onChange={changeHandeler}/>
                <input name="number" type="number" value={contactsInfo.number} placeholder="Number" onChange={changeHandeler}/>
                <div  onClick={submitHandler} className={styles.submit}>Add contact</div>
            </div>
        </div>
        <div>{alert ? <p>{alert}</p> : null}</div>
        <div className={styles.contactlist}>
            <h3 className={styles.listheader} >CONTACTS LIST</h3>
            <Contacts contacts={contactProps} />
        </div>
    </main>
        )
}


export default Form;