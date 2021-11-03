import { useState } from "react";

const MobShow = (props) => {
    const id = props.match.params.id;
    const mobs = props.mobs;
    const mob = mobs.find(m => m._id === id);

    const [editForm, setEditForm] = useState(mob);

    const handleChange = event => {
        setEditForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const { _id, name, health, damage, armor, image } = editForm;
        props.updateMobs({ name, health, damage, armor, image }, _id);
        props.history.push('/');
    }

    // const deleteMob = () => {
    //     props.deleteMobs(mob._id);
    //     props.history.push('/');
    // }

    return (
        <div className="mob">
            <h1>{mob.name}</h1>
            <img src={mob.image} alt={mob.name} />
            {/* <button id="delete" onClick={deleteMob}>DELETE</button> */}
            <form autocomplete="off" onSubmit={handleSubmit} to="/">
                <div className="topTwoInputBoxes">
                <input
                    name="name"
                    onChange={handleChange}
                    value={editForm.name}
                    type="text"
                />
                <input
                    name="title"
                    onChange={handleChange}
                    value={editForm.health}
                    type="text"
                />
                </div>
                <div className="middleTwoInputBoxes">
                <input
                    name="image"
                    onChange={handleChange}
                    value={editForm.damage}
                    type="text"
                />
                <input
                    name="image"
                    onChange={handleChange}
                    value={editForm.armor}
                    type="text"
                />
                </div>
                <div className="bottomInputBox">
                <input
                    name="image"
                    onChange={handleChange}
                    value={editForm.image}
                    type="url"
                />
                </div>
                <div className="submitButton">
                <input
                    type="submit"
                    value="Edit Mob" action="/mobs"
                />
                </div>
            </form>
        </div>
    );
}

export default MobShow;