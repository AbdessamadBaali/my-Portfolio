// read more btn script
let changeReadMore = document.querySelector("#read-more-btn")


function readMoreScript() {

    if (changeReadMore.textContent === "Read More...") {
         changeReadMore.textContent = "Read Less..."
        
    } else if (changeReadMore.textContent === "Read Less...") {
        changeReadMore.textContent = "Read More..."
    } else {
        changeReadMore.textContent = "Read Less..."
    } 
}

// forme
const sendFeedback = (emailjs, serviceID, templateId, variables, userId) => {
    emailjs.send(serviceID, templateId, variables, userId).then(res => {
        alert('Email successfully sent!')
    })
        .catch(err => alert.error('There has been an error.  Here some thoughts on the error that occured:', err))
}
$("form-contact").submit((e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value

    alert(`Thank you for your message from ${email}`);
    const templateId = 'template_ga13ufz';
    const serviceID = 'service_6yqhq29';
    const userId = "user_6uDwTYCySYHyDYjqRGDnu"
    const data = { from_name: name, message, from_email: email, to_name: 'Abdessamad' }
    import('emailjs-com').then(emailjs => sendFeedback(emailjs, serviceID, templateId, data, userId))
    
})

 