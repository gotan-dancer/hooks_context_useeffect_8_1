export default function Details(props) {
    
    /*
    const [details, setDetails] = useState(
        id: props.id,
        name: props.name
    );
    */
    
    useEffect(() => {

        const detailResponse = fetch(process.env.REACT_APP_DETAILS_URL+{details.id}+".json");
                                                                        // ?
        const details = await detailResponse.json();
    });

    return (
        <ul>
            {details.map(o => <li key={o.id}>{o.content}</li>)}
        </ul>
    )

}