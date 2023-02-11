// read more btn script

$(document).ready( () => {
    let changeReadMore = $("#read-more-btn")
    if (changeReadMore.text() == 'Read Less...' || changeReadMore.text() =='Read More...' ) {
        $('#readMore').slideToggle("slow");
        changeReadMore.text('Read More...')
    }

    changeReadMore.click( () => {
        $('#readMore').slideToggle("slow");
        if (changeReadMore.text() == 'Read More...') {
            changeReadMore.text('Read Less...')
        }
        else {
            changeReadMore.text('Read More...')
        }
    })

});


function sendMail() {
    const form = document.getElementById("form-contact");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
    
      const name = document.getElementById("name").value;
      const email = document.getElementById("mail").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("msg").value;
    
      const data = {
        apikey: "01196A8034249E557A7B52C81CF03647354AE89080699399A1EBF9680808A2E1AA266C2D5F6CA6975945A01A13A5C95C",
        subject: "Contact Me",
        from: email,
        to: "abdessamadbaali3@gmail.com",
        bodyHtml: `<p>Name: ${name}</p><p>Email: ${email}</p><p>phone: ${phone}</p><p>Message: ${message}</p>`
      };
    
      // Send the data to Elastic Email API
      fetch("https://api.elasticemail.com/v2/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            // show success message
            return;
          }
          throw new Error("Network response was not ok");
        })
        .catch(error => {
          // show error message
          console.error("There was a problem with the fetch operation:", error);
        });
    });
    
}

