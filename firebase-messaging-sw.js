importScripts("https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.8.0/firebase-messaging.js");

// Initialize Firebase in SW
firebase.initializeApp({
  apiKey: "AIzaSyCPSfmHJwV_1MNNeBF3obnpWaK0jDea6lE",
  authDomain: "dev-a-3cf61.firebaseapp.com",
  projectId: "dev-a-3cf61",
  storageBucket: "dev-a-3cf61.firebasestorage.app",
  messagingSenderId: "523395724429",
  appId: "1:523395724429:web:83bfb8a4077442ef611ec4",
  measurementId: "G-T2FL9C69S7"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "/icons/icon-192x192.png"
  });
});
