import React, { useState } from 'react'
import {AiOutlineCaretDown,AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-router-dom"
const NavbarMenu = () => {

    const [showMenu,setShowMenu] =useState(false)
    const headerTabs =[
        {
            label:"Home",
            link:'/'
        },
        {
            label:"About Us",
            link:'/about-us',
            dorpdownItems:[
               {
                label:'School Information',
                link:'/wishlist'
               },
               {
                label:'Manginig Committe',
                link:'/committe'
               },
               {
                label:'Chairman Message',
                link:'/chairman'
               },
               {
                label:'Director Message',
                link:'/director'
               },
               {
                label:'Principal Message',
                link:'/principal'
               },
               {
                label:'Affiliation Status',
                link:'/affiliation_status'
               },

            ]
        },
        {
            label:"Information Desk",
            link:'/information',
            dorpdownItems:[
               {
                label:'Infrastructure Details',
                link:'/infrastructure'
               },
               {
                label:'Student Enrollment',
                link:'/enroll'
               },
               {
                label:'Annual Report',
                link:'/annual'
               },
               {
                label:'Staff Details',
                link:'/staff'
               },
               {
                label:'Public disclosure',
                link:'/public'
               },
            ]
        },
        {
            label:"Faciities",
            link:'/information',
            dorpdownItems:[
               {
                label:'Computer Lab',
                link:'/computer'
               },
               {
                label:'Library',
                link:'/library'
               },
               {
                label:'Sports',
                link:'/sports'
               },
               {
                label:'Music',
                link:'/music'
               },
               {
                label:'Art',
                link:'/art'
               },
               {
                label:'School Uniform',
                link:'/uniform'
               },
               {
                label:'School Timing',
                link:'/timing'
               },
            ]
        },
        {
            label:"Admission",
            link:'/information',
            dorpdownItems:[
               {
                label:'Admission Procedure',
                link:'/procedure'
               },
               {
                label:'Fee Structure',
                link:'/fee'
               },
            ]
        },
        {
            label:"Academics",
            link:'/information',
            dorpdownItems:[
               {
                label:'Curriculum',
                link:'/curriculum'
               },
               {
                label:'Academic Calender',
                link:'/calender'
               },
               ]
        },
        {
            label:"Gallery",
            link:'/gallery',
            dorpdownItems:[
               {
                label:'Events',
                link:'/events'
               },
              
               {
                label:'Campus',
                link:'/campus'
               },
               {
                label:'Visitors',
                link:'/visitors'
               },
            ]
        },
        {
            label:"Career",
            link:'/career',
        },
        {
            label:"Contact",
            link:'/contact',
           },
    ]

    const toggleMenu  =()=>{
      setShowMenu(!showMenu)
    }

  return (
    <div className='nav-bar'>
        <div className={`navbar-container ${showMenu&&'show-menu'}`}>
        {
          headerTabs.map((item)=>(
            <div className='header-tab-container' key={item.label}>
                {
                    item.dorpdownItems ? (
                <div className='nav-bar-label'>
                    {item.label} {item.dorpdownItems && <AiOutlineCaretDown style={{marginLeft:'1px'}}/>}
                </div> 
                    ):(
                      <Link to={item.link}>
                      {item.label}
                      </Link>
                    )
                }
                 
              
              { item.dorpdownItems &&(
                <div className='menu'>
                   {
                    item.dorpdownItems.map((dropItem,i)=>(
                        <Link to={dropItem.link} className='menu-item' key={i}>
                           {dropItem.label}
                        </Link>
                    ))
                   }
                </div>                
              )}
            </div> 
          ))
        }
        
</div>
    <div className='nav-menu-bar' onClick={toggleMenu}>
    <AiOutlineMenu/>
    </div>
    </div>
  )
}

export default NavbarMenu;