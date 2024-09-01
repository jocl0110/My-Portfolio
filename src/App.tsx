// import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SendEmail from "./components/send-email/SendEmail";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
      
          
            <Route path="/" element={<Main />}></Route>
            <Route path="/send-email" element={<SendEmail />}></Route>
        
      
        </Routes>
      </Router>
    </>
  );
};

export default App;
