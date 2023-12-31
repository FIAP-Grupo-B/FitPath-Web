import React from 'react'
import style from './HeroBanner.module.css'

import sandwich from 'assets/mantrainning.png'

import FormContainer from 'components/FormContainer'


export default function HeroBanner({Title, Subtitle, Form}) {
  return (
    <div className={style.bannerOrange}>
        <div className='w-auto mt-9 ml-7 md:ml-28 md:mt-16 z-10 relative'>
            <h2 className=' text-white font-bold w-2/3'>{Title}</h2>
            <p className='text-white mt-8 md:mt-10 text-md md:text-lg w-11/12 md:w-1/2 font-light md:font-medium'>{Subtitle}</p>
        </div>
        <FormContainer Form={Form} />
        <picture>
            <img src={sandwich} className='absolute w-1/2 right-0 lg:-right-20 top-5 md:bottom-0' alt='Imagem sanduíche' />
        </picture>
    </div>
  )
}
