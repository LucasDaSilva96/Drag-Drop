import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
