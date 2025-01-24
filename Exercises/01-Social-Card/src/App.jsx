import { FollowCard } from './components/FollowCard.jsx'
import './components/FollowCard.css'

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return (
        <>
            <section className='App'>
                <FollowCard formatUserName={formatUserName} initIsFollowing={true} username="superCasey">
                    Casey
                </FollowCard>
                <FollowCard formatUserName={formatUserName}  initIsFollowing={false}  userName="darkJane">
                    Jane
                </FollowCard>

            </section>
        </>
    )
}

