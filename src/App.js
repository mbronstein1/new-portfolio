import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Layout from './components/UI/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
