import { useState, useEffect } from 'react';
import axios from 'axios';

import List from './list';

const Search = () => {
  const [term, setTerm] = useState('New York');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://es.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        }
      })

      setResults(data.query.search);
    }

    search();
  }, [debouncedTerm]);

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter search term</label>
          <input 
            value={term}
            onChange={e => setTerm(e.target.value)}
            className='input' 
          />
        </div>
        <div className='ui celled list'>
          <List results={results}/>
        </div>
      </div>
    </div>
  )
};

export default Search;