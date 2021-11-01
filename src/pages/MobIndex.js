import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobIndex = (props => {


    const [newForm, setNewForm] = useState(getNewState());

    const loaded = () => {
        return props.mobs.map(mob => {
            <div key={mob._id} className="mob">
                <Link to={`/mobs/${mob._id}`}>
                    <h1>{mob.name}</h1>
                </Link>
                <img style={{height: 200, witdh: 200, borderRadius: '10%'}} src={mob.image} alt={mob.name} />
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
        props.createMobs(newForm)
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
                placeholder="Mob Name"
                name="name"
                autoComplete="none"
                />
                <input 
                    value={newForm.health} 
                    onChange={handleChange} 
                    type="text"
                    placeholder="Health"
                    name="health" 
                    autoComplete="none"
                />
                <input 
                    value={newForm.behavior} 
                    onChange={handleChange} 
                    type="text"
                    placeholder="Behavior"
                    name="behavior" 
                    autoComplete="none"
                />
                <input 
                    value={newForm.image} 
                    onChange={handleChange} 
                    type="url"
                    placeholder="Image URL"
                    name="image" 
                    autoComplete="none"
                />
                <input type="submit" value="Create Mob" />
            </form>
            { props.mobs ? loaded() : loading() }
        </section>
    )
})

export default MobIndex;