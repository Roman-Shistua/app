import React from "react";
import Loader from "../../UI/Loader";


const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Loader />
    }


    return (
        <div>
            <div>
                <img src={props.profile.thumbnailUrl} />
            </div>
        </div>
    )
}

export default ProfileInfo;