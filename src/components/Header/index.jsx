import React from 'react'

import ButtonOrange from 'components/ButtonOrange'

import style from './Header.module.css'

export default function Header({Button}) {
  return (
    <div className={style.header}>
        <div className='w-full py-3 flex items-center justify-between'>
            <div className='md:px-24'>
                <h1 className='font-extrabold text-green text-4xl ml-5'>FitPath</h1>
            </div>
            <div className='md:px-24'>
                <ButtonOrange width="95%">{Button}</ButtonOrange>
            </div>
        </div>
    </div>
  )
}
