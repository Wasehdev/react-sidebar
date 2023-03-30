import { MenuItemsInterface } from "constants/constants"
import { useState } from "react"
import React from "react"
import { Link } from "react-router-dom"

interface sidebarItemProps {
    item : MenuItemsInterface,
    key : number,
    update? : any
    active : number
} 


export const SidebarItem = ({key, item, update, active} : sidebarItemProps)=> {
    const [open, setOpen] = useState<boolean>(false)
    console.log(active)
    if(item.childrens){
        return <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn" ></i>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} update= {update} active={active}/>) }
                </div>
            </div>
        
    }else{
        return (
            <div onClick={() => {
                update(item.id)
                }}>

            <Link to ={`${item.path}`} className={`sidebar-item plain ${ active === item.id && "selected" }`}>
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </Link>
            </div>
        )
    }
}