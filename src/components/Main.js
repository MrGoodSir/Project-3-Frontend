import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import AnimalIndex from '../pages/AnimalIndex'
import AnimalShow from '../pages/AnimalShow'
import EnemyIndex from '../pages/EnemyIndex';
import EnemyShow from '../pages/EnemyShow';
import HumanIndex from '../pages/HumanIndex';
import HumanShow from '../pages/HumanShow';



const Main = (props) => {



    return (
        <main>
            <Switch>
                <Route exact path="/home">
                    <AnimalIndex />
                </Route>
            </Switch>
        </main>
    )
}


export default Main;