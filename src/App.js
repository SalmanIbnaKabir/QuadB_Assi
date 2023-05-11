import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
