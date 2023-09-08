import React, { Suspense } from 'react'
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';
import Loader from "../assets/Loader";
import { Home,About,Contact,Projects } from "../assets";
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