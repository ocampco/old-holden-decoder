import { createBrowserRouter } from 'react-router-dom';
import routes from '../constants/routes';
import { PATH_BASENAME } from '../constants/paths';

const router = createBrowserRouter(routes, {
  basename: PATH_BASENAME,
});

export default router;
