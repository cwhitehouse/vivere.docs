import Prism from 'prismjs';
import Vivere from 'vivere';
import * as Turbo from '@hotwired/turbo';

import FancyCounter from './components/fancy-counter';
import FilterableListItem from './components/filterable-list-item';
import ToDoItem from './components/to-do-item';
import ToDoList from './components/to-do-list';
import VHref from './components/v-href';
import VStyle from './components/v-style';
import Page from './components/page';

Vivere.register('FancyCounter', FancyCounter);
Vivere.register('FilterableListItem', FilterableListItem);
Vivere.register('ToDoItem', ToDoItem);
Vivere.register('ToDoList', ToDoList);
Vivere.register('VHref', VHref);
Vivere.register('VStyle', VStyle);
Vivere.register('Page', Page);

document.addEventListener('turbo:click', (e) => {
  console.log('turbo:click');
  console.log(`  -> ${e.detail.url}`);
});
document.addEventListener('turbo:before-fetch-request', (e) => {
  console.log('turbo:before-fetch-request');
  console.log(e.detail.fetchOptions);
});
document.addEventListener('turbo:before-render', (e) => {
  console.log('turbo:before-render');
  console.log(e.detail.newBody);
});
document.addEventListener('turbo:render', (e) => {
  console.log('turbo:render');
  Prism.highlightAll();
});
