
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';



// initialState - это стартовые данные значение по умолчанию - state = initialState - значение по умолчанию. 
// Тоесть то что полюбому будет рендерится. Одноразовый обект в случае если state сюда не прийдет будешь тем самым стейтом.
// В начале когда state нет мы будем использовать initialState
// initialState полюбому должен быть хоть даже пустойт обект для того чтобы небыло undefined.


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 8 },
        { id: 2, message: 'Its my first post', likesCount: 7 },
        { id: 3, message: 'Hi, how are you', likesCount: 8 },
        { id: 4, message: 'Its my first post', likesCount: 7 },
        { id: 5, message: 'Hi, how are you', likesCount: 8 },
        { id: 6, message: 'Its my first post', likesCount: 7 },
        { id: 7, message: 'Its my first post', likesCount: 7 },
    ],
    newPostText: 'введите текст',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }


        default:
            return state;
    }

}

export const setUserProfile = (profile) => ({
    type: 'SET_USER_PROFILE',
    profile
})

export const addPostActionCreator = () => ({
    type: 'ADD-POST',
})

export const updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text,
})


export default profileReducer;