function generateQR() {

    const productName =
        document.getElementById("productName").value;

    const companyName =
        document.getElementById("companyName").value;

    const productCategory =
        document.getElementById("productCategory").value;

    const manual =
        document.getElementById("manualText").value;

    if(
        !productName ||
        !companyName ||
        !productCategory ||
        !manual
    ){
        alert("Please fill all fields.");
        return;
    }

    const qrData = JSON.stringify({
    productName: productName,
    company: companyName,
    category: productCategory,
    manual: manual
});

    const qrContainer =
        document.getElementById("qr-code");

    qrContainer.innerHTML = "";

    QRCode.toCanvas(
        qrData,
        {
            width:300
        },
        function(error, canvas){

            if(error){
                console.error(error);
                return;
            }

            qrContainer.appendChild(canvas);

            const downloadBtn =
                document.getElementById("downloadBtn");

            downloadBtn.style.display =
                "inline-block";

            downloadBtn.onclick = () => {

                const link =
                    document.createElement("a");

                link.download =
                    `${productName}-QR.png`;

                link.href =
                    canvas.toDataURL();

                link.click();
            };
        }
    );
}