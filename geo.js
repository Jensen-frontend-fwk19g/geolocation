/*
Metoder att vänta till dess att webbläsaren har läst in alla HTML-element till JavaScript DOM:
- länka script-taggen med attributet "defer"
- window.addEventListener('load')
- lägga script-taggen längst ner i body
*/


const button = document.querySelector('#geoButton');
button.addEventListener('click', () => {
    console.log('Geo button');
    const message = document.querySelector('.position');

    if( 'geolocation' in navigator ) {
        const geo = navigator.geolocation;
        // console.log('geolocation:', geo);
        geo.getCurrentPosition(
            pos => {
                // console.log('Got position: ', pos);
                let lat = pos.coords.latitude;
                let lng = pos.coords.longitude;
                message.innerHTML = `You are at ${lat}, ${lng}.`;
            },
            error => {
                // console.log('Could not get position: ', error);
                message.innerHTML = 'Please <em>allow</em> position and I will tell you where you are.';
            }
        )

    } else {
        message.innerHTML = 'This device does not have access to the Geolocation API.';
    }
})
