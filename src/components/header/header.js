import LogoImages from "./images.jpg"
import {Menu} from "../menu/menu";
import "./header.css"

function Logo() {
   return(
       <>
       <img src={LogoImages}/>
           </>
   )
}
export default function Header() {
    return(
        <header>
            Шапка сайта
            <Logo/>
            <Menu/>
        </header>
    )

}