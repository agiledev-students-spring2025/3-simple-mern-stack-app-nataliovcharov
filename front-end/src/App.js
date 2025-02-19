import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Messages from './Messages';
import MessageStandalone from './MessageStandalone';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from "./About";

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />

            {/* Route to see a list of all messages */}
            <Route path="/messages" element={<Messages />} />

            {/* Route for just a single message, where the ID is passed as a parameter */}
            <Route path="/messages/:messageId" element={<MessageStandalone />} />

            {/* Route for the About Us page */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
