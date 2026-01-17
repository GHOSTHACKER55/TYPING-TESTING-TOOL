// firebase-messaging-sw.js

// Import Firebase scripts for messaging
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
});

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('[FCM SW] Received background message ', payload);
  const { title, body, icon } = payload.notification;

  self.registration.showNotification(title, {
    body: body,
    icon: icon || '/icon.png'
  });
});