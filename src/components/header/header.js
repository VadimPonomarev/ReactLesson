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
export default function Header({setFilterData, arr_work}) {

    function handleClick(event) {
        const value =  event.target.value
        if(event.keyCode === 13){
            const res_arr = arr_work.filter(elem => elem.tags.includes(value))
            setFilterData(res_arr)
        }
    }

    return(
        <header>
            Шапка сайта
            <Logo/>
            <Menu/>
            <p>после нажатия на Enter начнеться поиск</p>
            <input placeholder="Введите тег" onKeyDown={handleClick}/>
        </header>
    )

}