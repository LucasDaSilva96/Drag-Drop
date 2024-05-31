export var ProjectsStatus;
(function (ProjectsStatus) {
    ProjectsStatus[ProjectsStatus["active"] = 0] = "active";
    ProjectsStatus[ProjectsStatus["finished"] = 1] = "finished";
})(ProjectsStatus || (ProjectsStatus = {}));
export class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
//# sourceMappingURL=project.js.map