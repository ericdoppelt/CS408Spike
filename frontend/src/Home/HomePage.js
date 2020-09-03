import React from 'react';
import {Typography} from '@material-ui/core';
import RoutingButton from './RoutingButton';
import ChampionshipImage from '../resources/ChampionshipBanner.jpeg';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';

function HomePage(props) {
    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Welcome to my CS408 Spike!</Typography>
            <Typography align='center' variant="h3"> Please choose a Duke NCAA National Champtionship.</Typography>
            <div class='centeredImage'>
                <img alt='duke championship banners' src={ChampionshipImage}></img>
            </div>
            <RoutingButton route='/championships/1991' message='1991'/>
            <RoutingButton route='/championships/1992' message='1992'/>
            <RoutingButton route='/championships/2001' message='2001'/>
            <RoutingButton route='/championships/2010' message='2010'/>
            <RoutingButton route='/championships/2015' message='2015'/>
            <RoutingButton route='/facts/fun' message='Bored of Championships?'/>
        </div>
    );

}

export default (HomePage);