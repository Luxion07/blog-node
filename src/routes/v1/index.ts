import { Router } from 'express';
// import authRoute from './auth.route';
// import userRoute from './user.route';
import postRoute from './post.route';
// import docsRoute from './docs.route';
// import config from '../../config/config';

// const router: Router = express.Router();
const router: Router = Router();

const defaultRoutes = [
  // {
  //   path: '/auth',
  //   route: authRoute,
  // },
  // {
  //   path: '/users',
  //   route: userRoute,
  // },
  {
    path: '/posts',
    route: postRoute,
  },
];

// const devRoutes = [
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

export default router;