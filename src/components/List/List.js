export default function List() {
    
    //const [news, setNews] = useState([]);
    
    useEffect(() => {

        const listResponse = await fetch(process.env.REACT_APP_LIST_URL);

        const list = await listResponse.json();
    });
    
    return (
        <ul>
            {list.map(o => <li key={o.id}>{o.name}</li>)} 
                                            // ?
        </ul>
    )

}