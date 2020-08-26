import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';
import ChampionshipButton from './ChampionshipButton';
import './HomePage.css';

import ChampionshipImage from '../resources/ChampionshipBanner.jpeg';

    
function HomePage(props) {
    return(
        <div>
            <Typography align='center' variant="h1"> Welcome to my CS408 Spike!</Typography>
            <Typography align='center' variant="h3"> Please choose a Duke NCAA National Champtionship.</Typography>
            <div class='bannerImage'>
                <img src={ChampionshipImage}></img>
            </div>
            <ChampionshipButton year='1991'/>
            <ChampionshipButton year='1992'/>
            <ChampionshipButton year='2001'/>
            <ChampionshipButton year='2010'/>
            <ChampionshipButton year='2015'/>
        </div>
    );
}



export default (HomePage);