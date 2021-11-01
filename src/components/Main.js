import { useState, useEffect } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import MobIndex from '../pages/MobIndex';
import MobShow from '../pages/MobShow';



const Main = (props) => {

    const [mobs, setMobs ] = useState([]);

    const BASE_URL = 'https://project-3-backend-app.herokuapp.com/mobs/';

    const getMobs = async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        setMobs(data)
    }

    const createMobs = async (mob) => {
        await fetch(BASE_URL, {
            method: 'post',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(mob)
        })

        getMobs();
    }

    useEffect(() => getMobs(), [])



    return (
        <main>
            <Switch>
                <Route exact path="/mobs">
                    <MobIndex mobs={mobs} createMobs={createMobs}/>
                </Route>
            </Switch>
        </main>
    )
}


export default Main;