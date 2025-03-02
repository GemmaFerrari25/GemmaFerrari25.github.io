// Create the ad container dynamically
var ad = document.createElement('div');

// List of ads with URL, image source, and title
var ads = [
    {
        url: 'https://www.quora.com/profile/Gemma-Ferrari-1',
        img: 'https://qph.cf2.quoracdn.net/main-thumb-2723536298-200-kkndpeaaeaqdxivqemcsnbnusfejisgf.jpeg',
        title: 'Gemma Ferrari Quora'
    },
    {
        url: 'https://www.quora.com/profile/Gemma-Ferrari-1',
        img: 'https://qph.cf2.quoracdn.net/main-thumb-2723536298-200-kkndpeaaeaqdxivqemcsnbnusfejisgf.jpeg',
        title: 'Gemma Ferrari Quora'
    }
];

// Generate the HTML structure for the ads
var adHTML = '<div style="display: flex; flex-direction: column;">'; // Wrapper div
ads.forEach(function(item) {
    adHTML += `
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <a href="${item.url}" target="_blank" style="text-decoration: none; color: inherit; display: flex; align-items: center;">
                <img src="${item.img}" alt="${item.title}" style="width: 80px; height: auto; margin-right: 10px;">
                <span>${item.title}</span>
            </a>
        </div>
    `;
});
adHTML += '</div>';

// Insert the generated HTML into the ad container
ad.innerHTML = adHTML;

// Append the ad container to an element with the ID 'ad-container' on the page
document.getElementById('ad-container').appendChild(ad);
