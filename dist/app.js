import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';
var App;
(function (App) {
    new ProjectInput();
    new ProjectList('active');
    new ProjectList('finished');
})(App || (App = {}));
//# sourceMappingURL=app.js.map