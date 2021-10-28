import { useState, useEffect } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import EnemyIndex from '../pages/EnemyIndex';
import EnemyShow from '../pages/EnemyShow';



const Main = (props) => {

    const [enemies, setEnemies ] = useState([]);

    const BASE_URL = 'http://localhost:3000/enemies';

    const getEnemies = async () => {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        setEnemies(data)
    }

    const createEnemies = async (enemy) => {
        await fetch(BASE_URL, {
            method: 'post',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(enemy)
        })

        getEnemies();
    }

    useEffect(() => getEnemies(), [])



    return (
        <main>
            <Switch>
                <Route exact path="/home/enemies">
                    <EnemyIndex enemies={enemies} createEnemies={createEnemies}/>
                </Route>
            </Switch>
        </main>
    )
}


export default Main;