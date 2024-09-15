import { createBrowserRouter } from 'react-router-dom';
import Template from '../Template';
import VehicleDecoder from '../components/VehicleDecoder';
import EngineDecoder from '../components/EngineDecoder';

const routes = [
  {
    path: '/decode/vin',
    element: (
      <Template>
        <VehicleDecoder />
      </Template>
    ),
  },
  {
    path: '/decode/engine-number',
    element: (
      <Template>
        <EngineDecoder />
      </Template>
    ),
  },
];

const router = createBrowserRouter(routes, {
  // TODO: find solution where this value can also be used in vite.config.ts
  basename: '/old-holden-decoder/',
});

export default router;
