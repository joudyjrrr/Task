import {
  Route,
  Routes as ReactRoutes,
  BrowserRouter,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const Categories = lazy(() => import("./pages/Categories"));
const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path="/:ProductId"
          element={
            <Suspense fallback={<></>}>
              <Products />
            </Suspense>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default App;
