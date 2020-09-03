import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSingupFrom } from './SingupFromContext'

function isEmpty(obj){
    return Object.keys(obj).length === 0
}

export default function StepLinks (){
    const {profile,social}=useSingupFrom()

    const isProfileDone = !isEmpty(profile)
    const isSocialDone = !isEmpty(social)

    return (
        <div className='step-links'>
                <NavLink exact to='/'>
                 {isProfileDone ? '❤️': '🤍'}   Profile <span /> </NavLink>
                 {isProfileDone ? (<NavLink to='/social'>{isSocialDone ? '❤️': '🤍'} <span />Social</NavLink>):(<a>Social <span /></a>)}
                {isProfileDone && isSocialDone ? (<NavLink to='/review'>{isSocialDone && isProfileDone ? '❤️': '🤍' }<span />Review</NavLink>) : (<a>Review <span /></a>) }
                
        </div>
    )
}