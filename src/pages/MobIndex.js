import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobIndex = (props) => {
    const [newForm, setNewForm] = useState(getNewState());

    const loaded = () => {
        return props.mobs.map(mob => (
            <div key={mob._id} className="mob">
                <Link className="link" to={`/mobs/${mob._id}`}>
                    <div className="mobContainer">
                        <h1>{mob.name}</h1>
                        <img className="indexImage" height="100" src={mob.image} alt={mob.name} />
                    </div>
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
            <form className="indexAllForm" autocomplete="off" onSubmit={handleSubmit}>
                <div className="topTwoInputBoxes">
                    <input
                        className="indexActualInputBox"
                        value={newForm.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Mob Name"
                        name="name"
                    />
                    <input
                        className="indexActualInputBox"
                        value={newForm.health}
                        onChange={handleChange}
                        type="text"
                        placeholder="Health"
                        name="health"
                    />
                </div>
                <div className="middleTwoInputBoxes">
                    <input
                        className="indexActualInputBox"
                        value={newForm.armor}
                        onChange={handleChange}
                        type="text"
                        placeholder="Armor"
                        name="armor"
                    />
                    <input
                        className="indexActualInputBox"
                        value={newForm.damage}
                        onChange={handleChange}
                        type="text"
                        placeholder="Damage"
                        name="damage"
                    />
                </div>
                <div className="bottomInputBox">
                    <input
                        className="indexActualInputBox"
                        value={newForm.image}
                        onChange={handleChange}
                        type="url"
                        placeholder="Image URL"
                        name="image"
                    />
                </div>
                <div className="submitButton">
                    <input className="allSubmitButtons" type="submit" value="Create Mob" onClick={handleSubmit} />
                </div>
            </form>
            <div className="indexContainer">
                {props.mobs ? loaded() : loading()}
            </div>
        </section>
    );
}

export default MobIndex;