// ==========================
// QR SCANNER
// ==========================

let html5QrCode;

function startScanner() {

    const reader = document.getElementById("reader");
    const resultContainer = document.getElementById("scan-result");

    // Clear previous scan result
    resultContainer.innerHTML = "";

    // Prevent multiple scanners
    if (html5QrCode) {
        html5QrCode.stop().catch(() => {});
    }

    html5QrCode = new Html5Qrcode("reader");

    html5QrCode.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: {
                width: 250,
                height: 250
            }
        },

        // SUCCESS
        // SUCCESS
(decodedText) => {

    html5QrCode.stop();

    let product;

    try {

        product = JSON.parse(decodedText);

    } catch(error) {

        alert("Invalid QR Code Format");
        return;
    }

    resultContainer.innerHTML = `

    <div class="modal-overlay">

        <div class="scan-modal">

            <div class="modal-header">

                <h2>✅ Manual Found</h2>

                <button
                    class="close-btn"
                    onclick="clearScan()">
                    ✕
                </button>

            </div>

            <div class="modal-body">

                <h3>📦 ${product.productName}</h3>

                <p>
                    🏢 ${product.company}
                </p>

                <p>
                    📂 ${product.category}
                </p>

                <textarea
                    id="manualContent"
                    readonly
                >${product.manual}</textarea>

            </div>

            <div class="modal-footer">

                <button
                    class="listen-btn"
                    onclick="readManual()">

                    🔊 Listen

                </button>

                <button
                    class="close-modal-btn"
                    onclick="clearScan()">

                    Close

                </button>

            </div>

        </div>

    </div>

    `;
},

        // ERROR
        (errorMessage) => {
            // Ignore frequent scan errors
        }
    );
}

// ==========================
// TEXT TO SPEECH
// ==========================

function readManual() {

    const manual =
        document.getElementById("manualContent").value;

    const speech =
        new SpeechSynthesisUtterance(manual);

    speech.lang = "en-US";
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

// ==========================
// CLEAR RESULT
// ==========================

function clearScan() {

    const resultContainer =
        document.getElementById("scan-result");

    const reader =
        document.getElementById("reader");

    resultContainer.innerHTML = "";
    reader.innerHTML = "";

}