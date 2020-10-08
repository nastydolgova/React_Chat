import update from "react-addons-update";
import { ADD_CHAT } from "../actions/chats_actions";

let initialStore = {
  chats: {
    1: {
      title: 'Chat 1',
      messagesList: [],
    },
    2: {
      title: 'Chat 2',
      messagesList: [],
    },
    3: {
      title: 'Chat 3',
      messagesList: [],
    },
  },
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      let chatId = Object.keys(store.chats).length + 1;
      return update(store, {
        chats: {
          $merge: {
            [chatId]: {
              title: action.title,
              messagesList: [],
            },
          },
        },
      });
    }
    default: {
      return store;
    }
  }
}
