import { useState } from "react";
import Contacts from "./Contacts";
import styles from "./form.module.css"
import {v4} from "uuid";
function Form (){
    console.log("hi body!")
    const [contactsInfo , setContacts] = useState({id:"", name:"",lname:"",email:"",number:""})
    const [contactProps , setProps] = useState([])
    const [alert,setAlert] = useState("")
    function changeHandler(event) {
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
    function deleteHandler(id){
        const filteredArray =  contactProps.filter(contact => (contact.id!==id))
        setProps(filteredArray)
    }

    return(
    <main className={styles.container}>
        <div>
            <h1 className={styles.title}>CONTACT APP</h1>
            <div className={styles.form}>
                <input name="name" type="text" value={contactsInfo.name} placeholder="Name" onChange={changeHandler} />
                <input name="lname" type="text" value={contactsInfo.lname} placeholder="Last Name"onChange={changeHandler}/>
                <input name="email" type="email" value={contactsInfo.email} placeholder="Email" onChange={changeHandler}/>
                <input name="number" type="number" value={contactsInfo.number} placeholder="Number" onChange={changeHandler}/>
                <div  onClick={submitHandler} className={styles.submit}>Add contact</div>
            </div>
        </div>
        <div className={styles.alertsec}>{alert ? <p>{alert}</p> : null}</div>
        <div className={styles.contactlist}>
            <h3 className={styles.listheader} >CONTACTS LIST</h3>
            <Contacts contacts={contactProps} deleteFunc={deleteHandler} />
        </div>
    </main>
        )
}


export default Form;
