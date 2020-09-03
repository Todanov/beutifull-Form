import React from 'react'
import { useSingupFrom } from './SingupFromContext'
import Animator from './Animator'

export default function ReviewForm (){
    const {profile,social}=useSingupFrom()
    
    function onSubmit (e){
        e.preventDefault()
        alert('Your form' )
    }
  
    return(
        <Animator>
        <form onSubmit={onSubmit}>
            <h3>Review All your info</h3>
            <p>Name:<span>{profile.name}</span></p>
            <p>Email:<span>{profile.email}</span></p>
            <p>Vk:<span>{social.vk}</span></p>
            <p>Instagramm:<span>{social.instagramm}</span></p>
            <input type='submit' value='Submit All info'/>
        </form>
        </Animator>
    )
}