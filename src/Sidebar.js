import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    console.log(user);

    const recentItems = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://thumbor.forbes.com/thumbor/711x176/https://blogs-images.forbes.com/josephliu/files/2019/06/10-ferdinand-stohr-149422-unsplash-1200x298.jpg?width=960" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0]}</Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>

                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programing')}
                {recentItems('Microsoft')}
                {recentItems('GeeksForGeeks')}
                {recentItems('developer')}
            </div>
        </div>
    )
}

export default Sidebar
