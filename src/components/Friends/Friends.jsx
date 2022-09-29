
import React from 'react';
import { useState, useEffect } from 'react';
import * as axios from 'axios';
import classes from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    const [friends, setFriends] = useState([])
    const [fetching, setFetching] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(45)

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${pageSize}&_page=${currentPage}`)
                .then(response => {
                    setFriends([...friends, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    console.log(response)
                })
                .finally(() => setFetching(false));
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
        // console.log('scrollHeight', e.target.documentElement.scrollHeight)
        // console.log('scrollTop', e.target.documentElement.scrollTop)
        // console.log('innerHeight', window.innerHeight)
    }


    return (
        <div className={classes.person}>
            {friends.map(friend => <div key={friend.id}>
                <div>{friend.title}</div>
                <NavLink to={'/profile/' + friend.id}>
                    <img className={classes.img} src={friend.thumbnailUrl}></img>
                </NavLink>
            </div>)
            }
        </div>
    )
}

export default Friends;