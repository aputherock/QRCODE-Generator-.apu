$(document).ready(function () {
    $('#generate-button').click(function () {
        var text = $('#text-input').val();
        $('#qrcode').empty().css("opacity", "0"); // Clear previous QR code and reset animation
        $('#download-container').empty().css("opacity", "0"); // Clear previous download button

        if (text) {
            $('#qrcode').qrcode({
                text: text,
                width: 256,
                height: 256
            });

            $('#qrcode').css("animation", "fadeIn 1.5s forwards");

            // Create a download button
            var downloadButton = $('<button id="download-button">Download QR Code</button>');
            $('#download-container').append(downloadButton);

            $('#download-container').css("animation", "fadeIn 1.5s forwards");

            // Add click event to download button
            downloadButton.click(function () {
                var canvas = $('#qrcode canvas')[0]; // Get the canvas element
                if (canvas) {
                    var link = document.createElement('a');
                    link.download = 'qrcode.png'; // Name of the downloaded file
                    link.href = canvas.toDataURL('image/png'); // Convert canvas to data URL
                    link.click(); // Trigger the download
                } else {
                    alert("QR code not generated yet.");
                }
            });
        } else {
            alert("Please enter a valid text or URL.");
        }
    });
});