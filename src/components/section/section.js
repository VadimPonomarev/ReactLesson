
export default function ListWork({data}){

    return(
        <>
          <p>
              <span>ID: {data.id}; </span>
              <span>Дата создания: {data.date_create.toISOString().slice(0,10)};  </span>
              <span>Дата завершения: {data.date_complet.toISOString().slice(0,10)};  </span>
              <span>Теги: {data.tags};  </span>
              <span>Описание: {data.description};  </span>
              <span>Состав участников: {data.parcticipants};  </span>

          </p>
        </>
    )
}