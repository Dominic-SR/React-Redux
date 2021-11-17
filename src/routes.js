import React,{lazy} from 'react';
const Dashboard = lazy(() => import("../src/component/Dashboard"))
const CRUD = lazy(() => import("../src/component/CRUD"))
const CRUDfile = lazy(() => import("../src/component/CRUDfile"))

export const Routes = [
    {
        path: "/",
        component:Dashboard,
        exact:true
    },
    {
        path: "/dashboard",
        component:Dashboard,
        exact:true
    },
    {
        path: "/crud/file",
        component:CRUDfile,
        exact:true
    },
    {
        path: "/crud/nonfile",
        component:CRUD,
        exact:true
    }
]