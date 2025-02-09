// ================================
// Ultimate "DarkWeb-Paranoia" JavaScript
// ================================


// Hämta viktiga element
const joinUsButton = document.querySelector('.join-us-button');
const hiddenMenu = document.querySelector('.hidden-menu');

// Vid klick på "Stig in – du har inget val"-knappen
joinUsButton.addEventListener('click', () => {
    // Visa den dolda menyn med en extra glitch-effekt
    hiddenMenu.style.display = 'block';
    hiddenMenu.classList.add('active');

    // Ändra bakgrundsfärg med en hotfull röd nyans
    document.body.style.transition = "background-color 0.5s, transform 0.1s";
    document.body.style.backgroundColor = "#330000"; // mörk röd
    setTimeout(() => {
        document.body.style.backgroundColor = "#0a0a0a";
    }, 500);

    // Spela ett kusligt ljud (se till att filen finns)
    const eerieSound = new Audio('eerie-sound.mp3');
    eerieSound.play().catch(e => console.warn("Ljudspelning blockerades:", e));

    // Skriv en hotfull varning i konsolen
    console.warn("Du är utvald. De ser allt. Ingen flykt finns.");
});

// ================================
// Tracking Dot – En röd prick som följer muspekaren (konstant övervakning)
// ================================
document.addEventListener('mousemove', (event) => {
    let trackingDot = document.getElementById('tracking-dot');
    if (!trackingDot) {
        trackingDot = document.createElement('div');
        trackingDot.id = 'tracking-dot';
        trackingDot.style.position = 'absolute';
        trackingDot.style.width = '10px';
        trackingDot.style.height = '10px';
        trackingDot.style.background = 'red';
        trackingDot.style.borderRadius = '50%';
        trackingDot.style.pointerEvents = 'none';
        trackingDot.style.zIndex = 9999;
        trackingDot.style.boxShadow = '0 0 15px red';
        document.body.appendChild(trackingDot);
    }
    trackingDot.style.left = (event.pageX + 10) + 'px';
    trackingDot.style.top = (event.pageY + 10) + 'px';
});

// ================================
// Glitch-effekt på texten – slumpmässigt förvrängd text
// ================================
function glitchText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const originalText = el.textContent;
        setInterval(() => {
            let newText = '';
            for (let i = 0; i < originalText.length; i++) {
                // 15% chans att byta ut tecknet, ökar känslan av kaos
                if (Math.random() < 0.15) {
                    newText += String.fromCharCode(33 + Math.floor(Math.random() * 94));
                } else {
                    newText += originalText[i];
                }
            }
            el.textContent = newText;
        }, 250);
        // Återställ texten regelbundet
        setInterval(() => {
            el.textContent = originalText;
        }, 3000);
    });
}
glitchText('.distorted-text');
glitchText('.whispering-text');

// ================================
// Slumpmässigt overlay med hotfulla meddelanden
// ================================
function randomOverlay() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0, 0, 0, 0.85)';
    overlay.style.color = '#ff0000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.fontSize = '2.5em';
    overlay.style.zIndex = 11000;

    // Meddelanden inspirerade av paranoid schizofreni och darkweb-tema
    const messages = [
        "De är inne i ditt huvud...",
        "Du kan inte fly. Du är deras lek.",
        "Varje tanke, varje steg övervakas.",
        "Sanningar döljs i mörkret.",
        "Din verklighet är en lögn."
    ];
    overlay.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.style.transition = 'opacity 1s';
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.remove(); }, 1000);
    }, 2500);
}
// Visa overlay var 12:e sekund
setInterval(randomOverlay, 12000);

// ================================
// Hotfulla meddelanden vid ändring av kryssrutor
// ================================
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        console.warn("Vi har noterat varje detalj. Du är vårt mål.");
    });
});

// ================================
// Slumpmässig flicker-effekt på viktiga element (bilder, rubriker, underrubriker)
// ================================
function randomFlicker() {
    const elements = document.querySelectorAll('.image-frame img, .header h1, .subtitle');
    elements.forEach(el => {
        if (Math.random() < 0.4) { // Öka sannolikheten för flicker
            el.style.transition = 'opacity 0.1s';
            el.style.opacity = '0';
            setTimeout(() => {
                el.style.opacity = '1';
            }, 100);
        }
    });
}
setInterval(randomFlicker, 2500);

// ================================
// Parallax-effekt vid scroll – bakgrunden rör sig med en annan hastighet
// ================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.body.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// ================================
// Dynamisk titel – ändrar sig slumpmässigt för att skapa en osäker känsla
// ================================
function randomizeTitle() {
    const titles = [
        "De ser allt...",
        "Din verklighet är en illusion.",
        "Ingen flyr från mörkret.",
        "Dina tankar är våra.",
        "Vi är alltid ett steg före."
    ];
    document.title = titles[Math.floor(Math.random() * titles.length)];
}
setInterval(randomizeTitle, 10000);

// ================================
// Extra: Skaka sidan (simulerar panik och förlust av kontroll)
// ================================
function shakePage() {
    document.body.style.transition = 'transform 0.1s';
    document.body.style.transform = `translate(${(Math.random() - 0.5) * 15}px, ${(Math.random() - 0.5) * 15}px)`;
    setTimeout(() => {
        document.body.style.transform = 'translate(0, 0)';
    }, 100);
}
setInterval(shakePage, 4000);

// ================================
// Extra: "Ghost messages" – hotfulla meddelanden som dyker upp slumpmässigt
// ================================
function ghostMessage() {
    const messages = [
        "De är redan inne i ditt huvud...",
        "Du kan inte lita på dina ögon.",
        "Vi gräver i dina hemligheter.",
        "Ingen tanke är privat.",
        "Du är förlorad."
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];
    const ghostDiv = document.createElement('div');
    ghostDiv.textContent = message;
    ghostDiv.style.position = 'fixed';
    ghostDiv.style.top = Math.random() * 90 + 'vh';
    ghostDiv.style.left = Math.random() * 90 + 'vw';
    ghostDiv.style.padding = '8px 16px';
    ghostDiv.style.background = 'rgba(255, 0, 0, 0.9)';
    ghostDiv.style.color = 'black';
    ghostDiv.style.fontSize = '1.2em';
    ghostDiv.style.fontWeight = 'bold';
    ghostDiv.style.zIndex = 12000;
    ghostDiv.style.borderRadius = '4px';
    ghostDiv.style.opacity = '0';
    ghostDiv.style.transition = 'opacity 0.5s, transform 0.5s';
    document.body.appendChild(ghostDiv);
    // Fade in
    setTimeout(() => {
        ghostDiv.style.opacity = '1';
        ghostDiv.style.transform = 'scale(1.1)';
    }, 50);
    // Fade out och ta bort elementet
    setTimeout(() => {
        ghostDiv.style.opacity = '0';
        ghostDiv.style.transform = 'scale(0.9)';
        setTimeout(() => {
            ghostDiv.remove();
        }, 500);
    }, 3500);
}
setInterval(ghostMessage, 7000);

// ================================
// Idle detection: Om användaren är inaktiv i 10 sekunder, visas ett overlay
// ================================
let lastInteractionTime = Date.now();
['mousemove', 'keydown', 'click'].forEach(eventName => {
    document.addEventListener(eventName, () => {
        lastInteractionTime = Date.now();
    });
});
function checkIdle() {
    const now = Date.now();
    if (now - lastInteractionTime > 10000) { // Inaktiv i mer än 10 sekunder
        const idleOverlay = document.createElement('div');
        idleOverlay.style.position = 'fixed';
        idleOverlay.style.top = '0';
        idleOverlay.style.left = '0';
        idleOverlay.style.width = '100vw';
        idleOverlay.style.height = '100vh';
        idleOverlay.style.background = 'rgba(0, 0, 0, 0.95)';
        idleOverlay.style.color = '#ff0000';
        idleOverlay.style.display = 'flex';
        idleOverlay.style.alignItems = 'center';
        idleOverlay.style.justifyContent = 'center';
        idleOverlay.style.fontSize = '3em';
        idleOverlay.style.zIndex = '13000';
        idleOverlay.textContent = 'Du kan inte fly... Du är vår fånge.';
        document.body.appendChild(idleOverlay);
        // Ta bort overlay efter 4 sekunder
        setTimeout(() => {
            idleOverlay.style.transition = 'opacity 1s';
            idleOverlay.style.opacity = '0';
            setTimeout(() => {
                idleOverlay.remove();
            }, 1000);
        }, 4000);
        // Återställ interaktionstiden
        lastInteractionTime = Date.now();
    }
}
setInterval(checkIdle, 1000);

// ================================
// Extra: Slumpmässigt spelade kusliga ljudklipp (inspirerade av darkweb)
// ================================
function playRandomSound() {
    const sounds = ['eerie1.mp3', 'eerie2.mp3', 'eerie3.mp3'];
    const sound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    sound.volume = 0.3;
    sound.play().catch(e => console.warn("Ljudfel:", e));
}
setInterval(() => {
    if (Math.random() < 0.35) { // 35% chans var 10:e sekund
        playRandomSound();
    }
}, 10000);
