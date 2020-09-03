import React from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'


import Animator from './Animator'
import { useSingupFrom } from './SingupFromContext'


export default function ProfileForm () {

    const {register, handleSubmit,errors}=useForm()
    const history = useHistory()
    const {profile,setProfile}=useSingupFrom()
  
    function onSubmit(data){
        setProfile(data)
        history.push('/social')
    }
    return(
        <Animator>
        <form onSubmit={handleSubmit(onSubmit)} noValidate >
            <h2>Tell us About Yourself</h2>

                <input
                 type='text'
                 name='name'
                 placeholder='What is your name?'
                 ref={register({required: true})}
                 defaultValue={profile.name}
            />
            <h6>{errors.name && 'Name is required'}</h6>
                <input 
                type='email' 
                name='email' 
                placeholder='What is your email?'
                ref={register ({required:true , pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}    
                defaultValue={profile.email}
           />
            <h6>{errors.email && 'Email is required'}</h6>
                <input type='submit' value='Next'/>
        </form>
        </Animator>
    )
}