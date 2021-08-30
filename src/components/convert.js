import { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [ translated, setTranslated ] = useState('');
  const [ debouncedText, setDebouncedText ] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 2000);

    return () => {
      clearTimeout(timerId)
    }
  }, [text]);

  useEffect(() => {
    const googleTranslateKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: debouncedText ,
        target: language.value,
        key: googleTranslateKey,
      }
    }).then(res => setTranslated(res.data.data.translations[0].translatedText))
  }, [language, debouncedText])

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  )
}

export default Convert;