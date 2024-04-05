import View from "./view.js";
import Service from "./service.js";
import Controller from "./controller.js";

const view = new View();

// localStorage.removeItem('tdd-ew-db')

const service = new Service({
    tableName: 'tdd-ew-db'
});

const controller = new Controller({ view, service });
controller.initialize();