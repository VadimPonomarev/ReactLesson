import styleMenu from "./menu.module.css"
export function Menu() {
    return (
        <ul className={styleMenu.list}>
            <li>news</li>
            <li>home</li>
            <li>gallery</li>
        </ul>
    )
}