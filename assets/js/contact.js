import { contactAPI } from "./services/contactService.js";


class contactForm {
    constructor(nameContactForm, emailContactForm, linkContactForm, messageContactForm) {
        this.name = nameContactForm;
        this.email = emailContactForm;
        this.websiteLink = linkContactForm;
        this.message = messageContactForm;
    }
}


function contact () {
    const formContact = document.getElementById("formContact");
    console.log(formContact);
    if(!formContact) return
    
    formContact.addEventListener("submit", async function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let websiteLink = document.getElementById("link").value;
        let message = document.getElementById("message").value;
        

    let newContact = new contactForm(name, email, websiteLink, message);
        console.log(newContact);

        try{
               const nouveauContact = await contactAPI(newContact);
               console.log(nouveauContact);
               
                
            formContact.reset();
            alert("Message sent !");

            } catch (error) {
                console.log(error);
                alert("Error, try later !");

            }

    })

}


contact ();
