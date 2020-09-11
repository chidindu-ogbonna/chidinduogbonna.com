import * as firebase from 'firebase/app'
import 'firebase/analytics'

const config = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: 'datahorror-b9cd4.firebaseapp.com',
  databaseURL: 'https://datahorror-b9cd4.firebaseio.com',
  projectId: 'datahorror',
  storageBucket: 'datahorror.appspot.com',
  messagingSenderId: '397665529422',
  appId: '1:397665529422:web:799f6a3e425091d55ddd1f',
  measurementId: 'G-4B8EWG1KBW',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const analytics = process.browser ? firebase.analytics() : null

export { analytics }

export default firebase
