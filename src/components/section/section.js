import "./section.css"
import {useState} from "react";
export default function ListWork({data}){
    const [isVisibleDescription, setIsVisibleDescription] = useState(false)
    function handleClick() {
        setIsVisibleDescription(!isVisibleDescription)
    }

    return(
        <>
          <p className="work" onClick={handleClick}>
              <span>ID: {data.id}; </span>
              <span>Дата создания: {data.date_create.toISOString().slice(0,10)};  </span>
              <span>Дата завершения: {data.date_complet.toISOString().slice(0,10)};  </span>
              <span>Теги: {data.tags};  </span>
              {isVisibleDescription ? (<span>Описание: {data.description};  </span>) : null}
              <span>Состав участников: {data.parcticipants};  </span>
          </p>
        </>
    )
}