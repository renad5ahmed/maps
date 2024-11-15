document.addEventListener('DOMContentLoaded', () => {
    const popupCard = document.getElementById('popup-card');
    const popupInfo = document.getElementById('popup-info');

    window.display = function(area) {
        const coords = area.getAttribute('coords').split(',');
        const [x, y, r] = coords.map(Number);
        const test=area.getAttribute('data-description').split(',');
        const[z1,z2]=test.map(String);

        popupInfo.innerHTML = `
            <p> <strong> ${area.alt}</strong></p>
            <p>${z1}
            </p>
            <p> ${z2}
          
            </p>
        `;

        popupCard.style.display = 'block';
        popupCard.style.top = `${y }px`;
        popupCard.style.left = `${x + r }px`;
    }

    window.hideCard = function() {
        popupCard.style.display = 'none';
    }

    window.moreInfo = function() {
        alert('More Info clicked!');
    }

    window.contactUs = function() {
        alert('Contact Us clicked!');
    }
});

