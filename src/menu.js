export const Menu = [
    {
        name:"Dashboard",
        icon:"",
        fixMenu: true,
        path:"/dashboard",
        children:[]
    },
    {
        name:"CRUD",
        icon:"",
        fixMenu: false,
        path:"/crud",
        children:[
            {
                name:"With File",
                path:"/crud/file",
                icon:""
            },
            {
                name:"Without File",
                path:"/crud/nonfile",
                icon:""
            }
        ]

    }
] 