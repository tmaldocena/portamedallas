import { Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import ViewItem from './pages/ViewItem';

function App() {

  const location = useLocation();

  return (
    <DefaultLayout>
      <Routes location={location}>
          <Route path='/' index element={ <Home /> }/>
          <Route path='/tienda' index element={ <Shop /> }/>
          <Route path='/item/:id' element={ <ViewItem /> } />
          <Route path='/contact' element={ <Contact />} />
          <Route path='*' index element={ <Error404 /> }/>
      </Routes>
    </DefaultLayout>
  )
}

export default App
