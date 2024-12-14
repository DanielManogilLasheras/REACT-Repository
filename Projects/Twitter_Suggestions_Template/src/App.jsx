import './App.css'
import { TwitterFollowCard } from './TwiiterFollowCard'
export function App(){
const nameFormat= <span>@Pepe</span>
//Un componente es una factoría de elementos
//Elemento es lo que se renderiza React
    return(
        <section>
            <TwitterFollowCard 
            nameFormat={nameFormat}
            userName="midudev" 
            name="Miguel Angel" 
            isFollowing={true}/>
        </section>
        
    )
}