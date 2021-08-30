import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Wrapper = styled.div`
  margin: 75px 0;
`

const ChangeText = ({ options }) => {
  const [ changeColor, setChangeColor ] = useState('');

  useEffect(() => {
    if (!changeColor) {
      
    }
  }, [changeColor])

  return (
    <Wrapper>
      <h2 onClick={() => changeColor}>Change text color</h2>
    </Wrapper>
  )
}

export default ChangeText;