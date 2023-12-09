import styles from "./form.module.css"
    function Contacts ({contacts}){
        
        if(contacts.length==0){
            return(
            <div>
               no contacts yet!
            </div>)
        } else {
            return(
                <ul className={styles.mainlist}>
                    {contacts.map(contact => (<li className={styles.listitem} key={contact.id}>
                        {contact.name + " " + contact.lname}
                        <div>
                            <p>
                            <span>📧</span>
                            {contact.email}
                            </p>    
                        </div>
                        <div>
                            <p>
                            <span>📞</span>
                            {contact.number}
                            </p>
                        </div>
                        <div>
                            <a href="#">🗑</a>
                        </div>
                        </li>))}
                </ul>
            )
        }
}




export default Contacts;