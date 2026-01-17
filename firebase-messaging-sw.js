importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');

// Initialize Firebase in Service Worker
firebase.initializeApp({
  messagingSenderId: "939891243370"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  const notificationTitle = payload.notification.title || 'Anonymous Shadows';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // replace with your app icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});