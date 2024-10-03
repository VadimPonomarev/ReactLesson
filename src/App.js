import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ListWork from "./components/section/section";

function App() {
    const arr_work = [
        {
            id: 1,
            date_create: new Date('2024-10-03T10:00:00'),
            date_complet: new Date('2024-11-03T10:00:00'),
            tags:['tag 1', 'tag 2', 'tag 3'],
            description: 'Класная задача №1',
            parcticipants: ['student 1', 'student 2' , 'student 3'],
            status: true
        },
        {
            id: 2,
            date_create: new Date('2024-10-07T10:00:00'),
            date_complet: new Date('2024-10-20T10:00:00'),
            tags:['tag 1', 'tag 2', 'tag 3'],
            description: 'Класная задача №2',
            parcticipants: ['student 1', 'student 4' , 'student 5'],
            status: false
        },
        {
            id: 3,
            date_create: new Date('2024-10-10T10:00:00'),
            date_complet: new Date('2024-11-15T10:00:00'),
            tags:['tag 1', 'tag 2'],
            description: 'Класная задача №3',
            parcticipants: ['student 2', 'student 3' , 'student 5'],
            status: true
        },
        {
            id: 4,
            date_create: new Date('2024-10-04T10:00:00'),
            date_complet: new Date('2024-11-10T10:00:00'),
            tags:['tag 1', 'tag 2'],
            description: 'Класная задача №4',
            parcticipants: ['student 2', 'student 3' , 'student 5'],
            status: true
        }
    ]

    const resfilter = arr_work.filter(elem => elem.status === true)
    const arrsort = resfilter.sort((a,b) => {
        return b.date_complet - a.date_complet
    })
    return (
        <div>
            <Header/>
            {
                arrsort.map((elem, index) => (
                    <ListWork key={index} data={elem}/>
                ))
            }
            <Footer/>
        </div>
    );
}

export default App;

