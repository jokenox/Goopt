import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AppContextProvider } from './contexts/AppContext/AppContext';

import Home from './pages/Home';
import Results from './pages/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/results" element={ <Results /> } />
            <Route exact path="/" element={ <Home /> } />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
