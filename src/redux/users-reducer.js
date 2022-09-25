const SET_USERS = 'SET-USERS';
const TOTAL_COUNT = 'TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [ ],
    pageSize: 10,
    // totalUsersCount: 30, тут ошибка, надо вычислить эту ошибку
    currentPage: 3,
    isFetching: false 
};

const usersReducer = (state = initialState, action) => {
switch (action.type) {
    case SET_USERS: {
        return {...state, users: action.users}
    }
    case TOTAL_COUNT: {
        return{...state, totalUsersCount: action.count}
    }
    case SET_CURRENT_PAGE: {
        return{...state, currentPage: action.currentPage}
    }
    case TOGGLE_IS_FETCHING: {
        return{...state, isFetching: action.isFetching}
    }
}
    return state;
}

export const setUsersAC = (users) => ({
    type: 'SET-USERS',
    users,
})

export const totalUsersCountAC = (count) => ({
    type: 'TOTAL-COUNT',
    count,
})

export const setCurrentPageAC = (currentPage) => ({
    type:'SET-CURRENT-PAGE',
    currentPage,
})

export const toggleIsFetchingAC = (isFetching) => ({
    type:'TOGGLE-IS-FETCHING',
    isFetching,
})

export default usersReducer;
