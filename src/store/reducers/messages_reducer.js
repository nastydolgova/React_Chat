import update from 'react-addons-update'
import {SEND_MSG} from '../actions/messages_actions'

const initialStore={
    messages:{ 
        1: { name: "1", text: "Hello" },
        2: { name: "Bot", text: "Hi" },
        3: { name: "1", text: "Bye" },
        4: { name: "Bot", text: "Wait" }
      }
}

export default function msgReducer (store = initialStore, action){
    switch (action.type){
        case SEND_MSG: {
             return update(store,{
                messages: {  $merge: { [ action.messageId] : { name: action.sender, text: action.text }} }
             });
        }
        default :
            return store;
    }
}