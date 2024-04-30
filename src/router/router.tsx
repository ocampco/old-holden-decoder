import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import * as loaders from './loaders';

const routes = [
  {
    path: '/',
    element: <App />,
    loader: loaders.decodeFromParams,
  },
];

const router = createBrowserRouter(routes, {
  // TODO: find solution where this value can also be used in vite.config.ts
  basename: '/old-holden-decoder/',
});

export default router;
