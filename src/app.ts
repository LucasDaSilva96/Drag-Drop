import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
