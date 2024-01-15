import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4GvzGL_3OJFI8B9o3gNCHzcUVZ0tKYPs",
  authDomain: "project-49925.firebaseapp.com",
  projectId: "project-49925",
  storageBucket: "project-49925.appspot.com",
  messagingSenderId: "1032811251196",
  appId: "1:1032811251196:web:6577bec7b581ce527e5e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <ChakraProvider>
      <App />
    </ ChakraProvider>
)
