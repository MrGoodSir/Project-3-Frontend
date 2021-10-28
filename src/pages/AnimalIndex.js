import { Link } from 'react-router-dom';
import { useState } from 'react';

const AnimalIndex = (props => {


    const [newForm, setNewForm] = useState(getNewState());

    const loaded = () => {
        return props.animals.map(animal => {
            <div key={animal._id} className="animal">
                <Link to={`/home/animals/${animal._id}`}>
                    <h1>{animal.name}</h1>
                </Link>
                <img style={{height: 200, witdh: 200, borderRadius: '10%'}} src={animal.image} alt={animal.name} />
            </div>
        })
    }

    const loading = () =>  <h1>Loading...</h1>

    const handleChange = (event) => {
        setNewForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createAnimals(newForm)
        setNewForm(getNewState());
    }

    function getNewState() {
        return {
            name: "",
            health: "",
            behavior: "",
            image: "",
        }
    }

    return (
        <section>
            <form className="Form" onSubmit={handleSubmit}>
                <input
                value={newForm.name}
                onChange={handleChange}
                type="text"
                placeholder="Animal Name"
                name="name"
                />
                <input 
                    value={newForm.health} 
                    onChange={handleChange} 
                    type="text"
                    placeholder="Health"
                    name="health" 
                />
                <input 
                    value={newForm.behavior} 
                    onChange={handleChange} 
                    type="text"
                    placeholder="Behavior"
                    name="behavior" 
                />
                <input 
                    value={newForm.image} 
                    onChange={handleChange} 
                    type="url"
                    placeholder="Image URL"
                    name="image" 
                />
                <input type="submit" value="Create Animal" />
            </form>
            { props.animals ? loaded() : loading() }
        </section>
    )
})

export default AnimalIndex;