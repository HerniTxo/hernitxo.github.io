importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyBd3E8i2BCixJZc8x7jd6ZxC9g9sX5YopI',
    appId: '1:1083890337557:web:1614821a55a46b9c90cb1c',
    messagingSenderId: '1083890337557',
    projectId: 'turnomaki',
    authDomain: 'turnomaki.firebaseapp.com',
    storageBucket: 'turnomaki.appspot.com',
    measurementId: 'G-M5T552W3ZZ',
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});

