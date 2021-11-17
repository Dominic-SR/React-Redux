import React, { Suspense } from 'react'
import Aside from './Aside'
import Navpar from './Navpar'
import {Switch, Route} from 'react-router-dom'
import { Routes } from '../routes'

function Base() {
    return (
        <React.Fragment>
        <Navpar/>
        <Aside/>
        <div className="content-wrapper">
            <section className="content">
            <div className="container-fluid">
                <Suspense fallback={<div>Loading</div>}>                
                   <Switch>
                       {
                           Routes.map((route,index) => {
                               return((
                                   <Route
                                   path={route.path}
                                   key={index}
                                   component={route.component}
                                   exact={route.exact}
                                   />
                               ))
                           })
                       }
                    </Switch>
                </Suspense>
            </div>
            </section>
        </div>
    </React.Fragment>
    )
}

export default Base
