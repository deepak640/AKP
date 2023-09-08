import React, { Suspense, lazy } from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../Pages/About'));
import Loader from "../assets/Loader";
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Projects />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router