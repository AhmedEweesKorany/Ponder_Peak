import React, {useState} from 'react'
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/404';
import { DarkModeContext } from './Context';
import DarkModeToggler from './components/DarkModeToggler/DarkModeToggler';
import ArticaleDetailPage from './pages/ArticlePage/ArticaleDetailPage';
import Register from './pages/Register/Register';

const App = () => {
  // inti dark mode 
  const [dark, setDark] = useState(localStorage.getItem('darkMode') || false);
  const element = document.documentElement;

  if (dark) {
    element.classList.add("dark");
    localStorage.setItem('darkMode', true);
  } else {
    element.classList.remove("dark");
    localStorage.removeItem('darkMode');
  }
  
  return (
<>
<div className=' dark:bg-gray-900 dark:text-white font-roboto'>
  
{/* The `<DarkModeContext.Provider value={[dark, setDark]}>` component is providing the `dark` state and
`setDark` function to all components that are descendants of it. This is achieved using React's
Context API. By wrapping components with this provider, those components can access the `dark` state
and `setDark` function without having to pass them down through props manually at each level of the
component tree. This makes it easier to manage and share state across different parts of the
application. */}
  <DarkModeContext.Provider value={[dark,setDark]}>
    
{/* The `<DarkModeToggler/>` component is rendering a button or toggle switch that allows the user to
switch between dark mode and light mode in the application. When clicked, this component will toggle
the `dark` state between `true` and `false`, which in turn will update the styling of the
application to reflect the chosen mode. This component is likely connected to the `dark` state and
`setDark` function provided by the `DarkModeContext.Provider`, allowing it to interact with the dark
mode functionality of the application. */}
<DarkModeToggler/>

{/* The code snippet you provided is setting up routing for the application using the `Routes` and
`Route` components from `react-router-dom`. */}
    <Routes>

<Route element={<Home/>} path='/'/>
<Route element={<ArticaleDetailPage/>} path='/article/:id'/>
<Route element={<Register/>} path='/register'/>
<Route element={<NotFound/>} path='*'/>

    </Routes>

  </DarkModeContext.Provider>
  

</div>
</>    
  )
}

export default App