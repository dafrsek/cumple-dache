// Configuración de la fecha objetivo (11 de octubre de 2025, 8:00 PM)
const targetDate = new Date('2025-10-11T20:00:00');

// Función para actualizar el contador regresivo
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    // Si la fecha ya pasó
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar elementos del DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Efecto de animación cuando cambian los números
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    countdownNumbers.forEach(number => {
        number.style.transform = 'scale(1.1)';
        setTimeout(() => {
            number.style.transform = 'scale(1)';
        }, 100);
    });
}

// Actualizar contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar inmediatamente

// Manejo del formulario RSVP
document.addEventListener('DOMContentLoaded', function() {
    initMusicGate();
    const form = document.getElementById('rsvp-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener datos del formulario
        const formData = new FormData(form);
        const name = formData.get('name');
        const attendance = formData.get('attendance');
        const comment = formData.get('comment');

        // Validar que se haya seleccionado asistencia
        if (!attendance) {
            alert('Por favor selecciona si asistirás o no.');
            return;
        }

        // Simular envío a Formspree (reemplazar con tu endpoint real)
        submitToFormspree(formData);
    });
});

// Función para enviar a Formspree
async function submitToFormspree(formData) {
    try {
        // Reemplazar 'TU_ENDPOINT_FORMSPREE' con tu endpoint real de Formspree
        const response = await fetch('https://formspree.io/f/TU_ENDPOINT_FORMSPREE', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showSuccessMessage();
            document.getElementById('rsvp-form').reset();
        } else {
            // Si no hay endpoint configurado, mostrar mensaje de éxito de todas formas
            showSuccessMessage();
            document.getElementById('rsvp-form').reset();
        }
    } catch (error) {
        console.log('Error al enviar formulario:', error);
        // Mostrar mensaje de éxito de todas formas para demo
        showSuccessMessage();
        document.getElementById('rsvp-form').reset();
    }
}

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    const form = document.getElementById('rsvp-form');
    const successMessage = document.getElementById('success-message');
    
    // Ocultar formulario
    form.style.display = 'none';
    
    // Mostrar mensaje de éxito
    successMessage.classList.remove('hidden');
    
    // Efecto de confeti virtual
    createConfetti();
}

// Función para crear efecto de confeti
function createConfetti() {
    const colors = ['#FF5CFF', '#39FF14', '#00FFFF', '#8A2BE2', '#FF6B35', '#FFFF00'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = 'confetti-fall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            // Remover confeti después de la animación
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
}

// Animación de confeti
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Efectos de scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -10px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las secciones
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(12px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Efecto de partículas de fondo
function createParticles() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100vh';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.animation = 'particle-float 8s linear forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Crear partículas cada 2 segundos
setInterval(createParticles, 2000);

// Efecto de hover en elementos interactivos
document.querySelectorAll('.event-info-card, .countdown-item, .gallery-item, .moodboard-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Efecto de sonido al hacer clic (opcional)
function playClickSound() {
    // Crear un audio context para generar un sonido de clic
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Agregar efecto de sonido a botones
document.querySelectorAll('button, input[type="radio"], .gallery-item, .moodboard-item').forEach(element => {
    element.addEventListener('click', playClickSound);
});

// Función para compartir en redes sociales
function shareEvent() {
    if (navigator.share) {
        navigator.share({
            title: '¡Hagamos un viaje en el tiempo!',
            text: 'Mis felices 30 - Sábado 11 de octubre de 2025',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('¡Hagamos un viaje en el tiempo! Mis felices 30 - Sábado 11 de octubre de 2025');
        window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    }
}

// Agregar botón de compartir si es necesario
// Puedes agregar esto al HTML si quieres un botón de compartir
// <button onclick="shareEvent()" class="share-button">Compartir</button>

// Efecto de vibración en dispositivos móviles
function vibrateDevice() {
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
}

// Agregar vibración a elementos interactivos en móviles
if ('ontouchstart' in window) {
    document.querySelectorAll('button, input, .gallery-item, .moodboard-item').forEach(element => {
        element.addEventListener('touchstart', vibrateDevice);
    });
}

// Función para detectar si el dispositivo está en modo oscuro
function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Ajustar colores según el modo del sistema
if (isDarkMode()) {
    document.body.classList.add('dark-mode');
}

// Escuchar cambios en el modo de color
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Función para preload de imágenes (para mejorar performance)
function preloadImages() {
    const imageUrls = [
        // Aquí puedes agregar URLs de imágenes reales cuando las tengas
        // 'path/to/image1.jpg',
        // 'path/to/image2.jpg',
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Preload de imágenes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', preloadImages);

// Función para optimizar performance en scroll
let ticking = false;

function updateOnScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Aquí puedes agregar efectos que se ejecuten durante el scroll
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);

// Función para detectar si el usuario está en un dispositivo móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar efectos según el dispositivo
if (isMobile()) {
    // Reducir animaciones en móviles para mejor performance
    document.body.style.setProperty('--animation-duration', '0.5s');
} else {
    // Mantener animaciones completas en desktop
    document.body.style.setProperty('--animation-duration', '1s');
}

console.log('🎉 ¡Cumple Dache está listo para la farra! 🎉'); 

// ============================
// Música: Gate + Control global
// ============================
function initMusicGate() {
    const musicGate = document.getElementById('music-gate');
    const audio = document.getElementById('bg-music');
    const toggle = document.getElementById('global-audio-toggle');
    const icon = toggle ? toggle.querySelector('.global-audio-icon') : null;
    const btnYes = document.getElementById('btn-music-yes');
    const btnNo = document.getElementById('btn-music-no');

    if (!musicGate || !audio || !toggle) return;

    // Mostrar gate SIEMPRE en cada carga
    musicGate.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Mostrar el toggle desde el inicio (permite controlar música incluso sin pasar por gate)
    toggle.classList.remove('hidden');
    updateIcon(audio && !audio.paused, icon);

    btnYes && btnYes.addEventListener('click', () => {
        sessionStorage.setItem('musicShouldPlay', 'true');
        musicGate.classList.add('hidden');
        document.body.style.overflow = '';
        toggle.classList.remove('hidden');
        safePlay(audio, icon, toggle);
    });

    btnNo && btnNo.addEventListener('click', () => {
        sessionStorage.setItem('musicShouldPlay', 'false');
        musicGate.classList.add('hidden');
        document.body.style.overflow = '';
        toggle.classList.remove('hidden');
        updateIcon(false, icon);
    });

    toggle.addEventListener('click', () => {
        if (audio.paused) {
            sessionStorage.setItem('musicShouldPlay', 'true');
            safePlay(audio, icon, toggle);
        } else {
            audio.pause();
            sessionStorage.setItem('musicShouldPlay', 'false');
            updateIcon(false, icon);
        }
    });
}

function updateIcon(isPlaying, icon) {
    if (!icon) return;
    icon.textContent = isPlaying ? '⏸' : '▶';
}

function safePlay(audio, icon, toggle) {
    if (!audio) return;
    const tryPlay = () => audio.play().then(() => {
        updateIcon(true, icon);
    }).catch(() => {
        // Si el navegador bloquea autoplay, mantener el toggle visible para que el usuario intente manualmente
        toggle && toggle.classList.remove('hidden');
        updateIcon(false, icon);
    });
    // En iOS a veces requiere interacción; intentamos al cargar/visible
    if (document.visibilityState === 'visible') {
        tryPlay();
    } else {
        document.addEventListener('visibilitychange', function onVis() {
            if (document.visibilityState === 'visible') {
                document.removeEventListener('visibilitychange', onVis);
                tryPlay();
            }
        });
    }
}