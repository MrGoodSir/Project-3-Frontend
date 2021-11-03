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

    const handleCancel = event => {
        props.history.push('/')
    }

    // const deleteMob = () => {
    //     props.deleteMobs(mob._id);
    //     props.history.push('/');
    // }

    return (
        <div className="mob">
            <div className="showTopPortion">
                <div className="showLeftHalf">
                    <h1>{mob.name}</h1>
                    <img className="showImage" width="150" height="300" src={mob.image} alt={mob.name} />
                </div>
                <div className="showRightHalf">
                    <h3>Health: {mob.health}</h3>
                    <h3>Armor: {mob.armor}</h3>
                    <h3>Damage: {mob.damage}</h3>
                    <h3>Armor: {mob.health}</h3>
                </div>
            </div>
            {/* <button id="delete" onClick={deleteMob}>DELETE</button> */}
            <form autocomplete="off" onSubmit={handleSubmit} to="/">
                <div className="topTwoInputBoxes">
                    <input
                        placeholder="Name"
                        className="indexActualInputBox"
                        name="name"
                        onChange={handleChange}
                        value={editForm.name}
                        type="text"
                    />
                    <input
                        placeholder="Health"
                        className="indexActualInputBox"
                        name="title"
                        onChange={handleChange}
                        value={editForm.health}
                        type="text"
                    />
                </div>
                <div className="middleTwoInputBoxes">
                    <input
                        placeholder="Damage"
                        className="indexActualInputBox"
                        name="image"
                        onChange={handleChange}
                        value={editForm.damage}
                        type="text"
                    />
                    <input
                        placeholder="Armor"
                        className="indexActualInputBox"
                        name="image"
                        onChange={handleChange}
                        value={editForm.armor}
                        type="text"
                    />
                </div>
                <div className="bottomInputBox">
                    <input
                        placeholder="Image URL"
                        className="indexActualInputBox"
                        name="image"
                        onChange={handleChange}
                        value={editForm.image}
                        type="url"
                    />
                </div>
                <div className="submitButton">
                    <input
                        className="allSubmitButtons"
                        type="submit"
                        value="Edit Mob" action="/mobs"
                    />
                </div>
            </form>
            <button className="cancelButton" onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default MobShow;