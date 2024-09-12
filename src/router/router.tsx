import { createBrowserRouter } from 'react-router-dom';
import Template from '../Template';
import Decoder from '../components/Decoder';

const routes = [
  {
    path: '/',
    element: <Template><Decoder /></Template>,
  },
];

const router = createBrowserRouter(routes, {
  // TODO: find solution where this value can also be used in vite.config.ts
  basename: '/old-holden-decoder/',
});

export default router;
