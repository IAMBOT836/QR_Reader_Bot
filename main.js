// ==========================
// QR USER MANUAL BOT
// MAIN.JS
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ACTIVE NAVIGATION LINK
    // ==========================

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if(href === currentPage){

            link.classList.add("active");
        }
    });

    // ==========================
    // CONTACT FORM
    // ==========================

    const contactForm =
        document.getElementById("contactForm");

    if(contactForm){

        contactForm.addEventListener(
            "submit",
            function(e){

                e.preventDefault();

                const successMessage =
                    document.getElementById(
                        "success-message"
                    );

                if(successMessage){

                    successMessage.innerHTML =
                    "✅ Thank you! Your message has been received.";

                    successMessage.style.display =
                    "block";
                }

                contactForm.reset();

            }
        );
    }

});


// ==========================
// SPEECH SYNTHESIS
// ==========================

function speakText(text){

    if(!text){

        alert("No text available.");
        return;
    }

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    <select id="voiceLanguage">

<option value="en-US">
English
</option>

<option value="hi-IN">
Hindi
</option>

<option value="kn-IN">
Kannada
</option>

</select>
speech.lang =
document.getElementById(
"voiceLanguage"
).value;

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}


// ==========================
// STOP SPEAKING
// ==========================

function stopSpeaking(){

    window.speechSynthesis.cancel();
}


// ==========================
// SCROLL TO TOP
// ==========================

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });
}


// ==========================
// SHOW ALERT
// ==========================

function showNotification(message){

    alert(message);
}