/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
// import DashboardAnalyticsView from './views/DashboardAnalytics';


const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/wizard" />
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
        path: '/dashboard',
        exact: true,
        component: lazy(() => import('views/Dashboard'))
      },
      {
        path: '/workflow',
        exact: true,
        component: lazy(() => import('views/WorkFlow'))
      },
      {
        path: '/tableType1',
        exact: true,
        component: lazy(() => import('views/TableType1'))
      },
      {
        path: '/tableType1/details/:id',
        exact: true,
        component: lazy(() => import('views/TableDetails'))
      },
      {
        path: '/tableType1/details/:id/:tab',
        exact: true,
        component: lazy(() => import('views/TableDetails'))
      },
      {
        path: '/tableType2',
        exact: true,
        component: lazy(() => import('views/TableType2')) 
      },
    
      {
        path: '/tasks/create',
        exact: true,
        component: lazy(() => import('views/ProjectCreate'))
      },
      {
        path: '/tasks/:id',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/tasks/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/tasks',
        exact: true,
        component: lazy(() => import('views/TasksList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
