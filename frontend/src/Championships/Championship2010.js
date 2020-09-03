import React from 'react';
import {Typography} from '@material-ui/core';
import ChampionshipImage from '../resources/Championship2010.jpg';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';
import ReturnButton from '../CommonComponents/ReturnButton';

function Championship2010(props) {
    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Duke Championship: 2010</Typography>

            <div class='centeredImage'>
                <img alt='duke championship 1992' src={ChampionshipImage}></img>
            </div>
            
            <Typography align='center' variant='h6'>
                On April 5, 2010, Duke won its fourth national championship in Indianapolis, IN by beating the Butler Bulldogs. 
                <br/>
                In the last seconds of the game, Gordon Hayward heaved a desperation shot from half-court, which nearly ousted the Blue Devils.
                <br/>
                Kyle Singler was the Most Outstanding Player; however, Nolan Smith and John Scheyer both also crucial players and are now coaches.
                <br/>
                <br/>
                UNC did not make the tournament in 2010. Duke, though, has not misssed the tourney since 1996. GTHC.
                <br/>
                <br/>
                You can watch highlights from the game <a href='https://www.youtube.com/watch?v=vtnnjR7jZlY'>here</a>.
            </Typography>

            <ReturnButton/>
        </div>
    );
}

export default Championship2010;