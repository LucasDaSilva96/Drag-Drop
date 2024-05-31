// Project Type
export enum ProjectsStatus {
  active,
  finished,
}

// Project Class
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectsStatus
  ) {}
}
