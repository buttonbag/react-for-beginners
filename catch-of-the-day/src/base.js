import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyA3rw6caCS2BQC1Ws2x7m6PycGWKUzEYPk',
	authDomain: 'catch-of-the-day-louie-1.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-louie-1.firebaseio.com',
	projectId: 'catch-of-the-day-louie-1',
	storageBucket: 'catch-of-the-day-louie-1.appspot.com',
	messagingSenderId: '1066463315994',
	appId: '1:1066463315994:web:0544b65a534aa6d80769a3',
	measurementId: 'G-HNJ7ZZZ08X',
});

const base = Rebase.createClass(firebaseApp.database());

// a named export
export { firebaseApp };

//a default export
export default base;
