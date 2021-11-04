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
                    <img className="showImage" min-width="150" min-height="200" src={mob.image} alt={mob.name} />
                </div>
                <div className="showRightHalfContainer">
                    <div className="showRightHalf">
                        <h1>{mob.name}</h1>
                        <h3>Health: {mob.health}</h3>
                        <h3>Armor: {mob.armor}</h3>
                        <h3>Damage: {mob.damage}</h3>
                    </div>
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
                        name="health"
                        onChange={handleChange}
                        value={editForm.health}
                        type="text"
                    />
                </div>
                <div className="middleTwoInputBoxes">
                    <input
                        placeholder="Armor"
                        className="indexActualInputBox"
                        name="armor"
                        onChange={handleChange}
                        value={editForm.armor}
                        type="text"
                    />
                    <input
                        placeholder="Damage"
                        className="indexActualInputBox"
                        name="damage"
                        onChange={handleChange}
                        value={editForm.damage}
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
            </form>

            <div className="showButtonsContainer">
                <div className="showButtons">
                    <button className="allSubmitButtons" type="submit" onClick={handleSubmit}>Edit Mob</button>
                </div>
                <div className="showButtons">
                    <button className="cancelButton" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default MobShow;