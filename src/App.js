import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState([])

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log(user);
      }).catch(error => {
        // console.log(error);
      })
  }

  const handleGoogleSingOut = () => {
    signOut(auth).then(() => {
      // console.log('sing out successful');
      setUser([]);
    }).catch(error => {
      // console.error('problem');
    })
  }
  return (
    <div className="App">

      { 
      user.email ? <button onClick={handleGoogleSingOut}>Sing Out</button> :   
      <button onClick={handleGoogleSingIn}>Google Sing In </button>

      }

      <h2>Name: {user.displayName}</h2>
      <p>I know your Email Address : {user.email}</p>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;
