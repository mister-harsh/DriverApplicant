/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import { Label } from 'components';

export default [
  {
    // title: 'Pages',
    pages: [
      {
        title: 'Dashboards',
        href: '/dashboard',
        icon: DashboardIcon,
      },
      {
        title: 'Management',
        href: '/management',
        icon: BarChartIcon,
        children: [
          {
            title: 'Customers',
            href: '/management/customers'
          },
          {
            title: 'Customer Details',
            href: '/management/customers/1/summary'
          },
          {
            title: 'Projects',
            href: '/management/projects'
          }
        ]
      },
      {
        title: 'Tasks',
        href: '/tasks',
        icon: FolderIcon,
        children: [
          {
            title: 'Browse',
            href: '/tasks'
          },
          {
            title: 'Create',
            href: '/tasks/create'
          },
          {
            title: 'Overview',
            href: '/tasks/1/overview'
          },
          // {
          //   title: 'Files',
          //   href: '/tasks/1/files'
          // },
          // {
          //   title: 'Activity',
          //   href: '/tasks/1/activity'
          // },
          // {
          //   title: 'Subscribers',
          //   href: '/tasks/1/subscribers'
          // }
        ]
      },
      {
        title: 'Work Flow (Kanban)',
        href: '/workflow',
        icon: ListAltIcon,
        label: () => <Label color={colors.green[500]}>Opt</Label>
      },
      {
        title: 'Calendar',
        href: '/calendar',
        icon: CalendarTodayIcon,
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
        children: [
          {
            title: 'General',
            href: '/settings/general'
          },
          // {
          //   title: 'Subscription',
          //   href: '/settings/subscription'
          // },
          {
            title: 'Notifications',
            href: '/settings/notifications'
          },
          {
            title: 'Security',
            href: '/settings/security'
          }
        ]
      },
      {
        title: 'Authentication',
        href: '/auth',
        icon: LockOpenIcon,
        children: [
          {
            title: 'Login',
            href: '/auth/login'
          },
          {
            title: 'Register',
            href: '/auth/register'
          }
        ]
      },
      {
        title: 'Errors',
        href: '/errors',
        icon: ErrorIcon,
        children: [
          {
            title: 'Error 401',
            href: '/errors/error-401'
          },
          {
            title: 'Error 404',
            href: '/errors/error-404'
          },
          {
            title: 'Error 500',
            href: '/errors/error-500'
          }
        ]
      }
    ]
  }
];
