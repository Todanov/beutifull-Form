import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import ProfileForm from './ProfileForm'
import SocialForm from './SocialForm'
import ReviewForm from './ReviewForm'
import StepLinks from './StepLinks'
import { SingupFormContextProvider } from './SingupFromContext'

export default function SignupForm (){
    return(

        <SingupFormContextProvider>
                <StepLinks/>
                <AnimatePresence>
            <div className='signup-form'>
           
            <Switch>
                <Route exact path='/' component={ProfileForm}/>
                <Route  path='/social' component={SocialForm}/>
                <Route path='/review' component={ReviewForm}/>
            </Switch>
           
            </div>
            </AnimatePresence>
            
        </SingupFormContextProvider>
    )
}