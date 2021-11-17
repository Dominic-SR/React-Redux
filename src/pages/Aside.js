import React from 'react'
import { Menu } from '../menu'
import { Link } from 'react-router-dom';

function Aside() {
    return (
        <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
    
        <div className="sidebar">
          
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
            {
                Menu.map((menu, index) => (
                    menu.fixMenu ? (
                <React.Fragment key = {index}>
                    <li className="nav-item">
                        <Link to={menu.path} className="nav-link">
                            <i className={menu.icon}></i>
                            <p>
                            {menu.name}
                            </p>
                         </Link>
                         </li>
                </React.Fragment> 
                ) : (
               
                <React.Fragment key = {index}>
                    <li className="nav-item">
                        <Link className="nav-link">
                            <i className={menu.icon}></i>
                            <p>
                            {menu.name}
                            <i className="right fas fa-angle-left"></i>
                            </p>
                         </Link>
                         <ul className="nav nav-treeview">
                             {
                                 menu.children.map((child, cIndex) =>(
                                     <li key={cIndex} className="nav-item">
                                         <Link to={child.path} className="nav-link">
                                             <i className={child.icon}></i>
                                             <p>{child.name}</p>
                                         </Link>
                                    </li>
                                 ))
                             }
                         </ul>
                    </li>
                </React.Fragment>        
                    )
                
                ))
              }
              
            </ul>
          </nav>
       
        </div>
       </aside>
       </>
    )
}

export default Aside
