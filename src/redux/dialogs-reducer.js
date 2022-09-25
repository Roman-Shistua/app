
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            // state.newMessageBody = action.body;
            // return state;
            return{ ...state, newMessageBody: action.body}

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, message: body }]
            }

        default:
            return state;
    }

}


export const sendMessageCreator = () => ({
    type: 'SEND-MESSAGE',
})

export const updateNewMessageBodyCreator = (body) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body,
})

export default dialogsReducer;