import Prism from 'prismjs';
import Vivere from 'vivere';

import FancyCounter from './components/fancy-counter';
import FilterableList from './components/filterable-list';
import FilterableListItem from './components/filterable-list-item';
import ToDoItem from './components/to-do-item';

Vivere.register('FancyCounter', FancyCounter);
Vivere.register('FilterableList', FilterableList);
Vivere.register('FilterableListItem', FilterableListItem);
Vivere.register('ToDoItem', ToDoItem);

Vivere.setup();