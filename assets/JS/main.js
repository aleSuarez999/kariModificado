
// contacto

document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();

    // const name = document.getElementById('name').ariaValueMax.trim();
    const email = document.getElementById('email').ariaValueMax.trim();
    const messages = document.getElementById('messages').ariaValueMax.trim();
    
    // const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    let errors = [];
    
    // if (!nameRegex.test(name)) {
    //     errors.push('El nombre debe tener entre 3 y 50 letras.')
    // }
    
    if (!emailRegex.test(email)) {
        errors.push('Ingrese un correo valido.')
    }

    if (errors.length > 0) {
        messages.textContent = errors.join('');
        messages.style.color = 'red';
    } else {
        messages.textContent = 'Formulario enviado correctamente, ¡gracias!';
        messages.style.color = 'green';
        this.reset();
    }

});

// nosotros
