const API_URL = "http://localhost:3000/contact"

export async function contactAPI(contactFormobj) {
    const reponse = await fetch(API_URL, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(contactFormobj),
    });

    if (!reponse.ok) {
        throw new Error("Error while sending message. Try later");
    }

    return await reponse.json();
}