/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact__message')

const sendEmail = (e) => {
    e.preventDefault();

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_g4tj7rq', 'template_9dpnnu9', '#contact-form', 'f7Lsrvq71fVoHn_oqvuPQ')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Enviado com sucesso ✅';

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''; // Corrigido: contactmessage para contactMessage
            }, 5000);

            // Clear input fields
            contactForm.reset();
        })
        .catch(() => { // Corrigido: Colocado o .catch corretamente fora do .then
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
};

// Adiciona o evento 'submit' no formulário
contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

