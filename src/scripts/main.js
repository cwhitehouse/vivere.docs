import Prism from 'prismjs';
import Vivere from 'vivere';

import FancyCounter from './components/fancy-counter';
import FilterableList from './components/filterable-list';
import FilterableListItem from './components/filterable-list-item';

Vivere.register('FancyCounter', FancyCounter);
Vivere.register('FilterableList', FilterableList);
Vivere.register('FilterableListItem', FilterableListItem);

Vivere.setup();