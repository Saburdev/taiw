import React from 'react'

export const List = ({list}) => {
  return (
    <ul>
        {list.map((item,index) => {
            return <li key={index}>
                <span>{item.input}</span>
                <p>{item.text}</p>
            </li>;
        })}
    </ul>
  );
};
