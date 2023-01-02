import Typewriter from "typewriter-effect"
import '../App.css';
export default function Type(){

    return <div className="type" >
<Typewriter 
onInit={(typewriter)=>{
    typewriter.typeString("Hello World").start()
    .pauseFor(1000)
    .typeString('👋')
    .pauseFor('2000')
    .deleteAll()
    .typeString("mySelf,Manmohan")
    .start()
    .deleteAll()
    .pause(2000)
    .typeString('Full Stack Web Devloper').start()
    .pauseFor(100)

}}
options={{loop:true}}
/>
    </div>


}