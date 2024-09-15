(function() {
    // Find the container where the ad should be displayed
    var adContainer = document.getElementById('ad-container');

    // Create an ad element (could be an image, iframe, etc.)
    var ad = document.createElement('div');
    ad.innerHTML = `
        <a href="https://www.quora.com/profile/Gemma-Ferrari-1" target="_blank">
            <img src="https://qph.cf2.quoracdn.net/main-thumb-2723536298-200-kkndpeaaeaqdxivqemcsnbnusfejisgf.jpeg" alt="Ad Banner" style="width:300px; height:250px;">
        </a>
    `;

    // Append the ad element to the container
    adContainer.appendChild(ad);
})();
