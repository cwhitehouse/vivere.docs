import Prism from 'prismjs';
import Vivere from 'vivere';

import FancyCounter from './components/fancy-counter';
import FilterableListItem from './components/filterable-list-item';
import ToDoItem from './components/to-do-item';
import ToDoList from './components/to-do-list';

Vivere.register('FancyCounter', FancyCounter);
Vivere.register('FilterableListItem', FilterableListItem);
Vivere.register('ToDoItem', ToDoItem);
Vivere.register('ToDoList', ToDoList);

Vivere.setup();