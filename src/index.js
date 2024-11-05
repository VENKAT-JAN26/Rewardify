import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './utils/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

// window.addEventListener("load", function() {
//     // Wait for the page to fully load
//     setTimeout(() => {
//         // Select the Syncfusion license message div by style or other identifying properties
//         const licenseMessage = document.querySelector('div[style*="Syncfusion Essential Studio"]');
//         if (licenseMessage) {
//             licenseMessage.remove();
//         }

//         // Remove specific span or anchor tags if they are still there
//         const syncfusionSpan = document.querySelector("span");
//         if (syncfusionSpan) {
//             syncfusionSpan.remove();
//         }

//         const syncfusionLink = document.querySelector('a[href*="claim-license-key"]');
//         if (syncfusionLink) {
//             syncfusionLink.remove();
//         }
//     }, 100); // Adjust the delay if necessary
// });




root.render(
    <Provider store={store}>
    <App />
    </Provider>
);


reportWebVitals();
