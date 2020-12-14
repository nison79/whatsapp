import React ,{ useState } from 'react'
import './Chat.css'
import { Avatar ,IconButton } from '@material-ui/core'

import { AttachFile , MoreVert , SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios'

const Chat = ( {messages}) => {

    const [input,setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new' , {
            message: input,
            name:"George",
            timestamp : "now",
            received:false,
        });

        setInput('');
    }


    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                    <span className ="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp"> {message.timestamp}</span>
                    </p>
                ))}
                

                <p className="chat__message chat__reciever">
                    <span className ="chat__name">George </span>
                    This is a message
                    <span className="chat__timestamp"> {new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                    <span className ="chat__name">George </span>
                    This is a message
                    <span className="chat__timestamp"> {new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                    value ={input}
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    placeholder="Type a message"
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
