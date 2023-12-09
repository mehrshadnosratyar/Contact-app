import styles from "./form.module.css"
    function Contacts ({contacts,deleteFunc}){
        
        if(contacts.length==0){
            return(
            <div>
               no contacts yet!
            </div>)
        } else {
            return(
                <ul className={styles.mainlist}>
                    {contacts.map(contact => (<li className={styles.listitem} key={contact.id}>
                        {contact.name }  { contact.lname}
                        <div>
                            <p className={styles.txtcenter}>
                            <span>📧</span>
                            {contact.email}
                            </p>    
                        </div>
                        <div>
                            <p className={styles.txtcenter}>
                            <span>📞</span>
                            {contact.number}
                            </p>
                        </div>
                        <div>
                            <span className= {styles.deletebtn} onClick={() => deleteFunc(contact.id)} >🗑</span>
                        </div>
                        </li>))}
                </ul>
            )
        }
}




export default Contacts;