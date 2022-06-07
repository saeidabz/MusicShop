import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Card , Button} from "react-bootstrap";


const ShowString = () => {


    const [stringapp, setStringApp] = useState([])

    const getStringApp = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        console.log(response.data)
        setStringApp(response.data)
    }

    useEffect(() => {
        getStringApp();
    }, [])

    return (
        <div className="strings-card-info">
            {/* <h1>Show All the String</h1> */}
            {
                stringapp.map((classic,index) =>(

                    <Card className="m-2 rounded shadow-lg "style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={classic.image} />
                    <Card.Body>
                        <Card.Title>{classic.name}</Card.Title>
                        <Card.Text>${classic.price}</Card.Text>
                        <Card.Text>{classic.description}</Card.Text>
                        <Card.Text>{classic.category}</Card.Text>
                        <Card.Text>{classic.created}</Card.Text>

                        <Button variant="primary">Show Detail</Button>
                    </Card.Body>
                    </Card>

                ))
            }
        </div>
    );
};

export default ShowString;