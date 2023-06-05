import { auth } from "./services/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import Todo from './components/Todo';
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import About from "./components/About";


function App() {
  const [user] = useAuthState(auth);

    return (
    <div className="App">      
      <NavBar />
      
      {!user ? (
        <Welcome/>        
      ) : (
        <>
          <Todo/>
        </>
      )}

       <About />
       
    </div>
  );
}

export default App;
