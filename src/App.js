import { auth } from "./services/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import Todo from './components/Todo';
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">      
      <NavBar />
      
      {!user ? (
        <Welcome />
      ) : (
        <>
          <Todo />
        </>
      )}
    </div>
  );
}

export default App;
