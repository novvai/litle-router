import { e_l } from "./helpers"
import { ErrorPage } from "./error-page"

export class BaseRouter {
    constructor() {
        this.bootstrap();
    }

    bootstrap() {
        this.links = e_l('a[_href]');
        this.handlerClasses = { ErrorPage };

        this.routes = [
            {
                path: 'not-found',
                func: 'ErrorPage'
            }
        ];

        this.prepareBrowser();

        this.links.forEach(element => {
            element.addEventListener('click', this.stopAll);
            element.addEventListener('click', this.invokeStateChange.bind(this));
        });
    }

    /**
     * Merge the default routes with custom routes
     * 
     * @param {Array} routes 
     * @returns self
     */
    registerRoutes(routes) {
        this.routes = this.routes.concat(routes);

        return this;
    }

    /**
    * Initial loading of the router
    */
    load() {
        this.updateState(window.location.pathname);

        return this;
    }

    /**
     * Merge the default controllers with custom cuntrollers
     * 
     * @param {Object} controllers 
     * @returns self
     */
    registerControllers(controllers) {
        this.handlerClasses = Object.assign({}, this.handlerClasses, controllers);

        return this;
    }
    /**
     * Prevents the default behavior of browser <a> tag
     * 
     * @param {MouseEvent} e 
     */
    stopAll(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * Callback function for addEventListener attaching custom behaviour for <a> tags
     * 
     * @param {MouseEvent} e 
     */
    invokeStateChange(e) {
        this.updateState(e.currentTarget.getAttribute('_href'));
    }

    /**
     * Push custom state to the history window object, simulating new page opening
     * 
     * @param {string} state 
     */
    updateState(state) {
        history.pushState(null, '', `//${window.location.host}/${this.normalizeRoute(state)}`);
        window.dispatchEvent(new Event('nv-route-change'));
    }

    /**
     * Attaches Listener to the window object
     * Listening for route change
     */
    prepareBrowser() {
        window.addEventListener('nv-route-change', this.iniRouteChange.bind(this));
    }

    /**
     * Callback fetching needed information about the functionality of the route
     * executing the route handler
     * 
     * @param {Event} event 
     */
    iniRouteChange(event) {
        const route = this.normalizeRoute(window.location.pathname);
        let controller = this.findRoute(route);
        try {
            controller = this.handleController(controller);
        } catch (e) {
            return;
        }

        this.execute(controller);
    }

    /**
     * @param {string} route 
     */
    findRoute(route) {
        let result = null;

        this.routes.forEach(rEntry => {
            if (rEntry.path == route) {
                result = Object.assign({}, rEntry);
            }
        })

        if (result === null) {
            return this.defaultRoute();
        }

        return result;
    }

    /**
     * String normalizer, currently removing the "/" from the route
     * 
     * @param {string} route 
     */
    normalizeRoute(route) {
        let result = (route[0] == '/') ? route.substr(1) : route;

        return result;
    }

    /**
     * Default route redirect if the route 
     * that has been requested was not found inside the registered routes
     */
    defaultRoute() {
        this.updateState('not-found');
    }

    /**
     * Normalizer for the route controller
     * separating the Class from method and attaching them to the main object
     * if no method is provided its assumed that there will be |handle()| method
     * 
     * @param {Object} controller
     * 
     * @returns Object 
     */
    handleController(controller) {
        let controllerParts = controller.func.split('@');
        let controllerObject = { class: controllerParts[0], method: 'handle' };

        if (controllerParts.length == 2) {
            controllerObject.method = controllerParts[1];
        }

        return Object.assign({}, controller, controllerObject);
    }

    /**
     * Factory method that will find and initialize class
     * and invoke the class with given methodima
     * 
     * @param {Object} controller 
     */
    execute(controller) {
        try {
            const instance = new this.handlerClasses[controller.class]();
            return instance[controller.method]();
        } catch (error) {
            console.error(`${controller.class} not found.`)
        }
    }
}