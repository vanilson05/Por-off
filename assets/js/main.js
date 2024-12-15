/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactmessage = document.getElementById('contact__message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templeteID - #form - publickey
    emailjs.sendForm('service_g4tj7rq','template_k93vfhn','#contact-form','J6ly-p_FWOUul1vwK')

    .then(() =>{
        //show sent message
        contactmessage.textContent = 'Enviado com sucesso ✅'

        // remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        //clear input fields
        contactForm.reset()
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

