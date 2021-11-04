import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import MobIndex from '../pages/MobIndex';
import MobShow from '../pages/MobShow';

const Main = (props) => {
    const [mobs, setMobs] = useState([]);
    // const BASE_URL = 'http://localhost:3001/mobs/'; 
    const BASE_URL = 'https://project3backendapp.herokuapp.com/mobs/';
    const getMobs = async () => {
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-type': 'Application/json'
            }
        })
        const data = await response.json();
        setMobs(data);
    }

    const createMobs = async (mob) => {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(mob)
        });

        getMobs();
    }

    const updateMobs = async (mob, id) => {
        await fetch(BASE_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(mob)
        });
        getMobs();
    }


    // const deleteMobs = async id => {
    //     await fetch(BASE_URL + id, { method: 'DELETE'});
    //     getMobs();
    // }

    useEffect(() => getMobs(), [])


    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <MobIndex mobs={mobs} createMobs={createMobs} />
                </Route>
                <Route path="/mobs/:id" render={(rp) => (
                    mobs.length ?
                        <MobShow
                            {...rp}
                            mobs={mobs}
                            updateMobs={updateMobs}
                        // deleteMobs={deleteMobs}
                        />
                        :
                        <Redirect to="/" />
                )} />
                <Route to="/404">
                    <div>
                        <h1>Page not found</h1>
                        <Link to="/">Go Back to Home Page</Link>
                    </div>
                </Route>
            </Switch>
        </main>
    );
}


export default Main;