import React from 'react'
import Messages from "../MessagesField/MessagesField";
import ChatList from "../ChatList/ChatList";
import './style.css'

export default class Layout extends React.Component {
    render (){
        return(
            <div className="contain">
            <ChatList />
            <Messages />
            </div>
        )
    }
}

// Messages usr= { this.props.usr }
