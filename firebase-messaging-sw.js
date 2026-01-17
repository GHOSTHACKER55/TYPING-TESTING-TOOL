// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');

// Initialize Firebase (replace placeholders with your config)
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "anonymous-shadows.firebaseapp.com",
  projectId: "anonymous-shadows",
  storageBucket: "anonymous-shadows.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
});

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title || "Anonymous Shadows";
  const notificationOptions = {
    body: payload.notification.body || "You have a new message!",
    icon: payload.notification.icon || "/icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});