import React, {useEffect, useState} from 'react'
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/404';
import { DarkModeContext } from './Context';
import DarkModeToggler from './components/DarkModeToggler/DarkModeToggler';
import ArticaleDetailPage from './pages/ArticlePage/ArticaleDetailPage';
import Register from './pages/Register/Register';
import { Toaster } from 'react-hot-toast';
import {driver} from 'driver.js';
import "driver.js/dist/driver.css";
import TourGuied from './components/TourGuied/TourGuied';
import Login from './pages/Login/Login';
import ProfilePage from './pages/profilePage/ProfilePage';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AdminLayout from './pages/admin/AdminLayout';
import Admin from './pages/admin/screens/Admin';
import ManagePosts from './pages/admin/screens/posts/ManagePosts';
import EditPost from './pages/admin/screens/posts/EditPost';
import Comments from './pages/admin/screens/comments/Comments';
import Users from './pages/admin/screens/users/Users';
import AddNewPost from './pages/admin/screens/posts/AddPost';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Articles from './pages/Articles/Articles';
import FAQS from './pages/FAQS/FAQS';
import About from './pages/About/About';

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

  useEffect(()=>{
    Aos.init({
      duration: 1000,
    })
  },[])


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
<Route element={<Login/>} path='/login'/>
<Route element={<ProfilePage/>} path='/profile'/>
<Route element={<Articles/>} path='/Articles/:searchData'/>
<Route element={<Articles/>} path='/Articles'/>
<Route element={<About/>} path='/about'/>
<Route element={<FAQS/>} path='/faqs'/>

<Route element={<NotFound/>} path='*'/>
<Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost  />} />
          <Route path="posts/manage/create" element={<AddNewPost  />} />
          <Route path="users/manage" element={<Users />} />
        </Route>

    </Routes>

  </DarkModeContext.Provider>


<Toaster/>
</div>
</>
  )
}

export default App
