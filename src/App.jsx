import { Route, Routes, useLocation } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {

  const location = useLocation();

  return (
    <DefaultLayout>
      <Routes location={location}>
          <Route path='/' index element={ <Home /> }/>
          <Route path='*' index element={ <Error404 /> }/>
      </Routes>
    </DefaultLayout>
  )
}

export default App
