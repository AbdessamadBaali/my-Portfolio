
// read more btn script
let about = document.getElementById("about")

let parentContainer =  document.getElementById('read-more-text');

let changeReadMore = document.getElementById("read-more-btn")

function readMoreScript() {

    if (changeReadMore.textContent === "Read More...") {

         changeReadMore.textContent = "Read Less..."

         parentContainer.style.display = "block"

         about.style.height = "auto"

         about.style.margin = " 50px 0"


    } else {
        changeReadMore.textContent = "Read More..."
        
        parentContainer.style.display = "none"

        about.style.height = "100vh"
    }
}
// forme
const sendFeedback = (emailjs, serviceID, templateId, variables, userId) => {
    emailjs.send(serviceID, templateId, variables, userId).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
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
    const data = { from_name: name, message, from_email: email, to_name: 'omar' }
    import('emailjs-com').then(emailjs => sendFeedback(emailjs, serviceID, templateId, data, userId))
    
})
