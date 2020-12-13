import React from 'react'
import './Sidebar.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import { Avatar , IconButton } from '@material-ui/core'

const Sidebar = () => {
    return (
        <div className ="sidebar">
        
            <div className="sidebar__header">
                <Avatar src="https://avatars3.githubusercontent.com/u/63461774?s=460&u=bf590525c5c5b4cbebfd242bcc20d9ad17606aa8&v=4"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or tart a new Chat" type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
