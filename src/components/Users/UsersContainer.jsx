import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { setUsers, totalUsersCount, setCurrentPage, toggleIsFetching } from "../../redux/users-reducer.js";
import * as axios from 'axios';
import Loader from "../UI/Loader";

const UsersContainer = (props) => {



    let onPageChanget = (pageNumber) => {
        props.setCurrenPage(pageNumber)
    }
    let getUsers = () => {
        if (props.users.length === 0) {
            props.toggleIsFetching(true)
            axios.get(`https://jsonplaceholder.typicode.com/posts?limit=${props.pageSize}&page=${props.currentPage}`)
                .then(response => {
                    props.toggleIsFetching(false);
                    props.setUsers(response.data);
                    console.log(response.data)
                })

        }
    }




    return <>
        {props.isFetching ? <Loader /> : null}
        <Users totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            users={props.users}
            onPageChanget={onPageChanget}
            getUsers={getUsers}
        />
    </>



}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },

//         totalUsersCount: (count) => {
//             dispatch(totalUsersCountAC(count))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    setUsers,
    totalUsersCount,
    setCurrentPage,
    toggleIsFetching,
})(UsersContainer)

