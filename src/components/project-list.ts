import { DragTarget } from '../models/drag-drop';
import { Project, ProjectsStatus } from '../models/project';
import { Component } from './base-component';
import { autobind } from '../decorator/autobind';
import { ProjectItem } from './project-item';
import { projectState } from '../state/project-state';

// ProjectList Class
export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);

    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @autobind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      const listEl = this.element.querySelector('ul')!;
      listEl.classList.add('droppable');
    }
  }
  @autobind
  dropHandler(event: DragEvent): void {
    const ID = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(
      ID,
      this.type === 'active' ? ProjectsStatus.active : ProjectsStatus.finished
    );
  }

  @autobind
  dragLeaveHandler(event: DragEvent): void {
    const listEl = this.element.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }

  configure(): void {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === 'active') {
          return prj.status === ProjectsStatus.active;
        }
        return prj.status === ProjectsStatus.finished;
      });

      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;

    listEl.innerHTML = '';

    for (const item of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, item);
    }
  }

  renderContent() {
    const lisId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = lisId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }
}
