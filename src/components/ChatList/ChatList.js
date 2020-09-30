import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default class ChatList extends React.Component {
    
    render(){
    return(
        <ul>
            <Link to="/chat/1"><li>Chat 1</li></Link>
            <Link to="/chat/2"><li>Chat 2</li></Link>
        </ul>
    )
    }
}