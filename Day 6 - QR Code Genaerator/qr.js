// Function to generate QR Code
function generateQRCode() {
    const text = document.getElementById('text').value;
    if (!text) {
        alert('Please enter some text or URL');
        return;
    }

    // Clear the previous QR code
    document.getElementById('qrcode').innerHTML = "";

    // Generate the new QR code
    new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 128,
        height: 128
    });
}
