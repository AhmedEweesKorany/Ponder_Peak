import React, { useState } from 'react'
import Home from './pages/Home';

const App = () => {
  // inti dark mode 
  const [dark, setDark] = useState(false);
  const element = document.documentElement;

  if (dark) {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
  return (
<>
<div className='container'>
  <Home/>
</div>
</>    
  )
}

export default App