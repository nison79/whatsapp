import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>The last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
