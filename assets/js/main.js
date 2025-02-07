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

// Mostrar botão de scroll-up quando a rolagem for maior que 350px
const scrollup = () => {
    const scrollup = document.getElementById('scroll-up'); // Corrigido ID

    if (window.scrollY >= 350) {
        scrollup.classList.add('show-scroll');
    } else {
        scrollup.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', () => scrollup());

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // Ajuste fino para a detecção correta
        const sectionID = current.getAttribute("id");
        const sectionsClass = document.querySelector('.nav__list a[href="#' + sectionID + '"]');

        if (sectionsClass) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                sectionsClass.classList.add("active-link");
            } else {
                sectionsClass.classList.remove("active-link");
            }
        }
    });
};

// Adiciona o evento de scroll
window.addEventListener("scroll", scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, // animations repeat
})

sr.reveal(`.perfil`)


