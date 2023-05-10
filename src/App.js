import { lazy, Suspense } from 'react';
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/UI/Layout';
const Portfolio = lazy(() => import('./pages/Portfolio'));

const fallbackStyle = { textAlign: 'center', backgroundColor: 'rgb(220, 255, 255)' };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/new-portfolio' element={<Layout />}>
      <Route index={true} element={<Home />} />
      <Route
        path='portfolio'
        element={
          <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
            <Portfolio />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
