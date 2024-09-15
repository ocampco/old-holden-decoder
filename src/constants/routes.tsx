import { ReactNode } from 'react';
import EngineDecoder from '../components/EngineDecoder';
import VehicleDecoder from '../components/VehicleDecoder';
import Template from '../Template';
import { PATH_ENGINE_DECODER, PATH_VEHICLE_DECODER } from './paths';
import { RouteObject } from 'react-router-dom';

type ConfigItem = {
  path: string;
  Component: () => ReactNode;
};

const config: ConfigItem[] = [
  {
    path: PATH_VEHICLE_DECODER,
    Component: VehicleDecoder,
  },
  {
    path: PATH_ENGINE_DECODER,
    Component: EngineDecoder,
  },
];

const routes: RouteObject[] = config.map(({ path, Component }) => ({
  path,
  element: (
    <Template>
      <Component />
    </Template>
  ),
}));

export default routes;
