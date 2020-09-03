import React from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'

import Animator from './Animator'
import { useSingupFrom } from './SingupFromContext'


export default function SocialForm (){
    const {register,handleSubmit,errors}= useForm()
    const history=useHistory()
    const {social,setSocial}=useSingupFrom()
    
    function onSubmit(data){
        setSocial(data)
        history.push('review')
    }
    return (
        <Animator>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Tell us You Social</h2>
            <input
            type="text"
            name='vk'
            placeholder='What you have Vk'
            ref={register({required:true})}
            defaultValue={social.name}
            />
            <h6>{errors.vk && 'VK is required'}</h6>
            <input
            type='text'
            name='instagramm'
            placeholder='What you have Id Instagramm'
            ref={register({required:true})}
            defaultValue={social.name}
            />
            <h6>{errors.instagramm && 'Instagramm is required'}</h6>
            <input
            type='submit'
            value='Next'
            />
        </form>
        </Animator>
    )
} 