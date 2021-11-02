import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobIndex = (props) => {
    const [newForm, setNewForm] = useState(getNewState());
    const loaded = () => {
        return props.mobs.map(mob => (
            <div key={mob._id} className="mob">
                <h1>{mob.name}</h1>
                <Link to={`/mobs/${mob._id}`}>
                    <img style={{ height: 200, width: 200, borderRadius: '50%' }} src={mob.image} alt={mob.name} />
                </Link>
            </div>
        ));
    }

    const loading = () => <h1>Loading ...</h1>;


    const handleChange = (event) => {
        setNewForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }
        ));
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
            damage: "",
            armor: "",
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
                />
                <input
                    value={newForm.health}
                    onChange={handleChange}
                    type="text"
                    placeholder="Health"
                    name="health"
                />
                <input
                    value={newForm.damage}
                    onChange={handleChange}
                    type="text"
                    placeholder="Damage"
                    name="damage"
                />
                <input
                    value={newForm.armor}
                    onChange={handleChange}
                    type="text"
                    placeholder="Armor"
                    name="armor"
                />
                <input
                    value={newForm.image}
                    onChange={handleChange}
                    type="url"
                    placeholder="Image URL"
                    name="image"
                />
                <input type="submit" value="Create Mob" />
            </form>
            {props.mobs ? loaded() : loading()}
        </section>
    );
}

export default MobIndex;