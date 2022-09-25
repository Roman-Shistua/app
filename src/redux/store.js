import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likesCount: 8 },
                { id: 2, message: 'Its my first post', likesCount: 7 },
                { id: 3, message: 'Hi, how are you', likesCount: 8 },
                { id: 4, message: 'Its my first post', likesCount: 7 },
                { id: 5, message: 'Hi, how are you', likesCount: 8 },
                { id: 6, message: 'Its my first post', likesCount: 7 },
                { id: 7, message: 'Its my first post', likesCount: 7 },
            ],
            newPostText: 'введите текст'
        },

        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Yo' },
            ],
            dialogs: [
                { id: 1, name: 'Name-1' },
                { id: 2, name: 'Name-2' },
                { id: 3, name: 'Name-3' },
                { id: 4, name: 'Name-4' },
                { id: 5, name: 'Name-5' },
                { id: 6, name: 'Name-6' },
                { id: 7, name: 'Name-7' },
            ],

            newMessageBody: ""
        },
        sidebar:{}

    },
    _callSubscriber() {
        console.log('state const changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {


      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);

    }

}



window.store = store;

export default store;