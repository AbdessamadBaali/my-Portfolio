// read more btn script
$(document).ready( () => {

    let changeReadMore = $("#read-more-btn")
    changeReadMore.click( () => {
        $('#readMore').slideToggle("slow");
        if (changeReadMore.text() == 'Read More...') {
            changeReadMore.text('Read Less...')
        } else if (changeReadMore.text() == 'Read Less...') {
            changeReadMore.text('Read More...')
        }
        else {
            changeReadMore.text('Read More...')
        }
    })



		
});





// email generatore
// import $ from 'jquery'
// const sendFeedback = (emailjs, serviceID, templateId, variables, userId) => {
//     emailjs.send(
//         serviceID, templateId,
//         variables, userId
//     ).then(res => {
//         alert('Email successfully sent!')
//     })
//         .catch(err => alert.error('There has been an error.  Here some thoughts on the error that occured:', err))
// }

// $("#form-contact").submit((e) => {
//     e.preventDefault()

//     const name = e.target[0].value
//     const email = e.target[1].value
//     const phone = e.target[2].value
//     const message = e.target[3].value

//     alert(`Thank you for your message from ${email}`);
//     const templateId = 'template_ga13ufz';
//     const serviceID = 'my-email';
//     const userId = "user_6uDwTYCySYHyDYjqRGDnu"
//     const data = { from_name: name, message,from_email: phone, from_email: email, to_name: 'Abdessamad' }
//     import('emailjs-com').then(emailjs => sendFeedback(emailjs, serviceID, templateId, data, userId))
    
// })