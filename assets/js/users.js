function ajouterUserOptinNewsletter () {
    const formNews = document.getElementById("formNews");
    console.log(formNews);
    if(!formNews) return
    
    formNews.addEventListener("submit", async function (event) {
        event.preventDefault();

        let email = document.getElementById("newsletter-email").value;
        console.log(email);
        

    try {
        const newUserOptin = await ajouterUserOptinNewsletterAPI(email);
        console.log(newUserOptin);

        formNews.reset();
        alert("You subscribed at our Newsletter !")
        
    } catch (error) {
        console.log(error);
        alert("Error while subscribing. Try later")

    }

    })

}


ajouterUserOptinNewsletter ()
