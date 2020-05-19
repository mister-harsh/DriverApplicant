/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import UrlAccess from './layouts/UrlAccess'
// import DashboardAnalyticsView from './views/DashboardAnalytics';


const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/auth/login" />
  },
  {
    path: '/access',
    component: UrlAccess,
    routes: [
      {
        path: '/access/:clientID/',
        exact: true,
        component: lazy(() => import('views/ReRoute'))
      },
      {
        path: '/access/:clientID/:userID',
        exact: true,
        component: lazy(() => import('views/ReRoute'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/wizard',
        exact: true,
        component: lazy(() => import('views/Wizard'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
