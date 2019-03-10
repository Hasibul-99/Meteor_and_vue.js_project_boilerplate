// Import the router
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2';

// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior
  });

  // Not found
import NotFound from '/imports/ui/component/notFound.vue';
import Home from '/imports/ui/component/home.vue';
import Page1 from '/imports/ui/component/Page1.vue';
import Page1A from '/imports/ui/component/Page1A.vue';
import Page1B from '/imports/ui/component/Page1B.vue';
import Page2 from '/imports/ui/component/Page2.vue';

RouterFactory.configure(factory => {
    // Simple routes
    factory.addRoutes([
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/page1',
            name: 'page1',
            component: Page1,
            // Nested routes
            children: [
            {
                path: 'a',
                name: 'page1a',
                component: Page1A,
            },
            {
                path: 'b',
                name: 'page1b',
                component: Page1B,
            },
            ],
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2,
        },
        {
            path: '*',
            component: NotFound,
        }
    ])
  })

export default routerFactory;