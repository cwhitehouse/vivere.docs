import '@hotwired/turbo';
import { Vivere } from 'vivere';

import FancyCounter from './components/fancy-counter';
import FilterableListItem from './components/filterable-list-item';
import ToDoItem from './components/to-do-item';
import ToDoList from './components/to-do-list';
import VClass from './components/v-class';
import VHref from './components/v-href';
import VStyle from './components/v-style';
import Page from './components/page';

Vivere.register('FancyCounter', FancyCounter);
Vivere.register('FilterableListItem', FilterableListItem);
Vivere.register('ToDoItem', ToDoItem);
Vivere.register('ToDoList', ToDoList);
Vivere.register('VClass', VClass);
Vivere.register('VHref', VHref);
Vivere.register('VStyle', VStyle);
Vivere.register('Page', Page);
