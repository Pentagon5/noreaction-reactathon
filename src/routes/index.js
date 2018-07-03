import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import login from './login';
import table from './dashboardPages/tables';
import button from './dashboardPages/buttons';
import flotcharts from './dashboardPages/flotCharts';
import forms from './dashboardPages/forms';
import grid from './dashboardPages/grid';
import icons from './dashboardPages/icons';
import morrisjscharts from './dashboardPages/morrisjsCharts';
import notification from './dashboardPages/notification';
import panelwells from './dashboardPages/panelWells';
import typography from './dashboardPages/typography';
import blank from './dashboardPages/blank';
import error from './error';
import PyWeek from './dashboardPages/PyWeek';
import NodeWeek from './dashboardPages/NodeWeek';
import VzThon from './dashboardPages/VzThon';
import AngularDay from './dashboardPages/AngularDay';
import Header from '../components/Header';

export default [

  {
    path: '/login',
    children: [
      login,
    ],
    async action({ next, render, context }) {
      const component = await next();
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },


  {
    path: '/',

  // keep in mind, routes are evaluated in order
    children: [
      home,
      // contact,
      table,
      button,
      flotcharts,
      forms,
      grid,
      icons,
      morrisjscharts,
      notification,
      panelwells,
      typography,
      // register,
      blank,
      NodeWeek,
      PyWeek,
      VzThon,
      AngularDay,
      // place new routes before...
      // content,
      error,
    ],

    async action({ next, render, context }) {
      // console.log('inside dashboard');
      const component = await next();
      // console.log('inside dasdboard component', component);
      if (component === undefined) return component;
      return render(
        <div>
          <Header />
          <div id="page-wrapper" className="page-wrapper">
            <App context={context}>{component}</App>
          </div>
        </div>
      );
    },
  },
  {
    path: '/error',
    children: [
      error,
    ],
    async action({ next, render, context }) {
      // console.log('inside error');
      const component = await next();
      // console.log('inside error with component', component);
      if (component === undefined) return component;
      return render(
        <App context={context}>{component}</App>
      );
    },
  },
];
