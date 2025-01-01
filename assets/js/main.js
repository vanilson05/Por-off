/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message')

const sendEmail = (e) =>{
    
    e.preventDefault()

    //serviceID - templeteID - #form - publickey
    emailjs.sendForm('service_g4tj7rq','template_9dpnnu9','#contact-form','f7Lsrvq71fVoHn_oqvuPQ')

    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Enviado com sucesso ✅'

        // remove message after five seconds
        setTimeout(() =>{
            contactmessage.textContent = ''
        }, 5000)

        //clear input fields
        contactForm.reset()
   
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

