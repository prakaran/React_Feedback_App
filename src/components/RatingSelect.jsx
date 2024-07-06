import React, { useState } from 'react'

const ratingList =[
    {
        id: 'num1',
        value: 1
    },
    {
        id: 'num2',
        value: 2
    },
    {
        id: 'num3',
        value: 3
    },
    {
        id: 'num4',
        value: 4
    },
    {
        id: 'num5',
        value: 5
    },
    {
        id: 'num6',
        value: 6
    },
    {
        id: 'num7',
        value: 7
    },
    {
        id: 'num8',
        value: 8
    },
    {
        id: 'num9',
        value: 9
    },
    {
        id: 'num10',
        value: 10
    },
]
const RatingSelect = ({select}) => {
    const[selected, setSelected] = useState(10);
    const handleChange = (event)=>{
        setSelected(+event.currentTarget.value);
        select(+event.currentTarget.value);
    }
  return (
    <ul className='rating'>
        {ratingList.map((rate)=>{
            return <li>
                <input 
                    type='radio'
                    id={rate.id}
                    name='rating'
                    value={rate.value}
                    onChange={handleChange}
                    checked={selected === rate.value}
                />
                <label htmlFor={rate.id}>{rate.value}</label>
            </li>
        })}
    </ul>
  )
}

export default RatingSelect