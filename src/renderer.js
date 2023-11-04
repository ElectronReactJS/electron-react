/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

const fechIamages = () => {
    fetch("https://api.unsplash.com/search/photos?query=philippines&client_id=2BHRf_91BeuRTt7CDCE-_eA3l95wlZLWlyog-KQ2c2Y")
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log("There was a problem. Status code: " + response.status);
                    return;
                }
                response.json().then(
                    function (data) {
                        document.getElementById("image").style.background = 'url(' + data["results"][0]["urls"]["regular"] + ')';
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
