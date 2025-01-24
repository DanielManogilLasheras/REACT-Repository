/*

        onclick={handleclick}

            const [isFollowing, setIsFollowing] = useState(false)
    */



import React, { useState } from 'react'
export function FollowCard({children,formatUserName = 'unknown', initIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initIsFollowing)
    const imagesrc = `https://unavatar.io/youtube/${children}`
    const text = isFollowing ? 'Following' : 'Follow'

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    const handleclick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar"src={imagesrc} alt='Avatar' />
            <div className="tw-followCard-info">
                <strong >{children}</strong>
                <span className="tw-followCard-infoUserName">{formatUserName(children)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleclick}>
                {text}
            </button>
        </aside>
       </article>
    )
}