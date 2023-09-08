import { useEffect, useState } from 'react'
import './App.css'
import Router from "./Routes/Router";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: false
    });
  }, []);

  return (
    <>
      <Router />
    </>
  )
}

export default App
