import Controller from "./counter/Controller";
import Model from "./counter/Model";
import View from "./counter/View";

const model = new Model ();
const controller = new Controller (model);
const counter = document.getElementById('counter')
const view = new View (counter as HTMLDivElement, controller)
view;
