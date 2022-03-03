import React, { Component, useState } from 'react';
import styled from 'styled-components' ;

export const BoxColor = () => {

    const[color,setColor] = useState('blue')

  return (
    <div>
        <BoxStyle style={{background:color}} className='ChangeColor'></BoxStyle>
        <br />
        <button onClick={() => setColor('red')}>RED COLOR</button>
        <button brand='hello' onClick={() => setColor('blue')}>BLUE COLOR</button>
    </div>
  )
}

const BoxStyle = styled.div`
    width: 100px;
    height: 100px;
`