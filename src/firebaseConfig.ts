// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC9D_p7nmU9gp82SNesyqEmfwWK5kezsuw",
//     authDomain: "expora-56b0a.firebaseapp.com",
//     projectId: "expora-56b0a",
//     storageBucket: "expora-56b0a.firebasestorage.app",
//     messagingSenderId: "897135908270",
//     appId: "1:897135908270:web:f4d90252371303216ca43f",
//     measurementId: "G-SXJPHPEWF0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// src/firebaseConfig.ts

// Import Firebase functions
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// // ✅ Your Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyC9D_p7nmU9gp82SNesyqEmfwWK5kezsuw",
//     authDomain: "expora-56b0a.firebaseapp.com",
//     projectId: "expora-56b0a",
//     storageBucket: "expora-56b0a.firebasestorage.app",
//     messagingSenderId: "897135908270",
//     appId: "1:897135908270:web:f4d90252371303216ca43f",
//     measurementId: "G-SXJPHPEWF0",
// };

// // ✅ Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // ✅ Initialize Firebase services
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

// // ✅ Default export
// export default app;
// src/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // ✅ Import Auth
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC9D_p7nmU9gp82SNesyqEmfwWK5kezsuw",
    authDomain: "expora-56b0a.firebaseapp.com",
    projectId: "expora-56b0a",
    storageBucket: "expora-56b0a.firebasestorage.app",
    messagingSenderId: "897135908270",
    appId: "1:897135908270:web:f4d90252371303216ca43f",
    measurementId: "G-SXJPHPEWF0"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth (pass the app)
const auth = getAuth(app);

// ✅ Optional: Analytics (only for web)
const analytics = getAnalytics(app);

export { auth, app, analytics };  // ✅ Correct export
