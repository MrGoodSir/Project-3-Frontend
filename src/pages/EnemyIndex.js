import { Link } from 'react-router-dom';
import { useState } from 'react';

const EnemyIndex = (props => {


    const [newForm, setNewForm] = useState(getNewState());

    const loaded = () => {
        return props.enemies.map(enemy => {
            <div key={enemy._id} className="enemy">
                <Link to={`/home/enemies/${enemy._id}`}>
                    <h1>{enemy.name}</h1>
                </Link>
                <img style={{height: 200, witdh: 200, borderRadius: '10%'}} src={enemy.image} alt={enemy.name} />
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
        props.createEnemies(newForm)
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
                placeholder="enemy Name"
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
                <input type="submit" value="Create enemy" />
            </form>
            { props.enemies ? loaded() : loading() }
        </section>
    )
})

export default EnemyIndex;