const API_URL = "http://localhost:3000/optinNewsletter"

async function ajouterUserOptinNewsletterAPI(email) {
    const reponse = await fetch(API_URL, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({email}),
    });

    if (!reponse.ok) {
        throw new Error("Error while subscribing. Try later");
    }

    return await reponse.json();
}