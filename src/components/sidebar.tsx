import { menuItems } from "constants/constants"
import { SidebarItem } from "./sideBarItem"
import React, { useState } from "react"

export default function Sidebar(){
    const [active, setActive] = useState<number>(-10000000000000)

    const handleStatus = (id : number) => {
      setActive(id)
    }

    return (
        <div className="sidebar">
          { menuItems.map((item, index) => <SidebarItem key={index} item={item} update= {handleStatus} active = {active}/>) }
        </div>
    )
}


