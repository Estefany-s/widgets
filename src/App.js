import { useState } from 'react';

import Accordion from './components/accordion';
import Search from './components/search';
import Dropdown from './components/dropdown';
import Translate from './components/translate';
import Route from './components/route';
import Header from './components/header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is favorite JS library mong enginners'
  },
  {
    title: 'How do you use React?',
    content: 'You using React by creating components.'
  }
]

const options = [
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
  {
    label: 'The Color Red',
    value: 'red',
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'><Accordion items={items}/></Route>
      <Route path='/list'><Search/></Route>
      <Route path='/translate'><Translate/></Route>
      <Route path='/dropdown'>
        <Dropdown
          selected={selected} 
          onSelectedChange={setSelected}
          options={options}
          labelText='color'
        />
      </Route>
    </div>
  )
};

export default App;