import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Feedback_feature from './componenets/FeedbackFeature';


function App() {
 

  return (
    <>
      
        <BrowserRouter>
        <Routes>
        <Route path ="/" element={<Feedback_feature/>}/>
        </Routes>
        </BrowserRouter>
       
      
      
    </>
  )
}

export default App
