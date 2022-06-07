import axios from "axios";
import React, {useState} from "react";
import { useHistory } from 'react-router';

const AddString = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")

    const history = useHistory();


    const AddStringInfo = async () => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)

        if (image !== null) {
            formField.append('image',image)
        }

        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        })
        
    }

    return (
        <div className="container">
            <h1>Add String</h1>

            <div className="form-group">

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter String Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>


                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Price $"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>


                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>


                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)} />
                </div>


                <div className="form-group">
                    <input
                        type="file"
                        className="form-control form-control-lg"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>

                <button className="btn btn-success" onClick={AddStringInfo}>Add String</button>

            </div>
            
            
            
            
        </div>
    );
};

export default AddString;