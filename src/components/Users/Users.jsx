import { useState} from "react";
import classes from './Users.module.css'

let Users = (props) => {

    const [totalUsersCount, setTotalUsersCount] = useState(100)

    let pagesCount = Math.ceil(totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div>
            <button onClick={props.getUsers}>get users</button>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p && classes.selectedPage}
                    onClick={() => {props.onPageChanget(p);}} >{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div>{u.title}</div>
            </div>)
            }
        </div>
    )
}

export default Users;