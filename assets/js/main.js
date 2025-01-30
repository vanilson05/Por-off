/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact__message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_g4tj7rq', 'template_9dpnnu9', '#contact-form', 'f7Lsrvq71fVoHn_oqvuPQ')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Enviado com sucesso ✅';

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            // Clear input fields
            contactForm.reset();
        })
        .catch(() => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
};

// Adiciona o evento 'submit' no formulário
contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 

 const scrollup = () =>{
    const scrollup = document.getElementById('acroll-up')
  // when the scroll is heither than 350 viewport height,add the show-scroll class to the a tag with the scroll-top class
  this.scrolly >= 350 ? scrollup.classList.add('show-scroll')
                : scrollup.classList.remove('show-scroll')
 }

 window.addEventListener('scroll', scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

