import Contacts from "./Contacts";
function Form (){
    return(
        <>
        <div>
            <h1>CONTACT APP</h1>
            <div>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Last Name"/>
                <input  type="email" placeholder="Email"/>
                <input type="text" placeholder="Number"/>
                <div>Add contact</div>
            </div>
        </div>

        <div>
            <Contacts/>
        </div>
        </>
        )
}


export default Form;