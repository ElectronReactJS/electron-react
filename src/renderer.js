import React from 'react';
import { createRoot } from 'react-dom/client';

const fetchImages = () => {
    fetch("https://api.unsplash.com/search/photos?query=philippines&client_id=2BHRf_91BeuRTt7CDCE-_eA3l95wlZLWlyog-KQ2c2Y")
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("There was a problem. Status code: " + response.status);
                    return;
                }
                response.json().then(
                    function (data) {
                        document.body.style.background = 'url(' + data["results"][0]["urls"]["regular"] + ')';
                    }
                )}
        )
        .catch(
            function (err) {
                console.log(err + '404');
            })
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

root.render(<h1>This message is being logged by "renderer.js", included via webpack</h1>);

// Call the fetchImages function to fetch the image and set the background
fetchImages();
