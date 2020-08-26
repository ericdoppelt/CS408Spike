import React from 'react';
import {Typography} from '@material-ui/core';
import ChampionshipImage from '../resources/Championship1991.jpg';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';
import ReturnButton from './ReturnButton';

function Championship1991(props) {
    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Duke Championship: 1991</Typography>

            <div class='centeredImage'>
                <img alt='duke championship 1991' src={ChampionshipImage}></img>
            </div>

            <Typography align='center' variant='h6'>
                On April 1, 1991, Duke won its first national championship in Indianapolis, IN by beating the Kansas Jayhawks. 
                <br/>
                Christian Laettner led the team in points (18) and rebounds (10) and was the Most Valuable Player.
                <br/>
                <br/>
                UNC lost to Kansas in the Final Four in 1991. Ouch.
                <br/>
                <br/>
                You can watch the game <a href='https://www.youtube.com/watch?v=enat8WeXO_k'>here</a>.
            </Typography>

            <ReturnButton/>
        </div>
    );
}

export default Championship1991;
