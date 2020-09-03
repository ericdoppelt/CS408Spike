import React from 'react';
import {Typography} from '@material-ui/core';
import ChampionshipImage from '../resources/Championship2001.jpg';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';
import ReturnButton from '../CommonComponents/ReturnButton';

function Championship2001(props) {
    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Duke Championship: 2001</Typography>

            <div class='centeredImage'>
                <img alt='duke championship 1992' src={ChampionshipImage}></img>
            </div>
            
            <Typography align='center' variant='h6'>
                On April 2, 2001, Duke won its third national championship in Minneapolis, MN by beating the Arizona Wildcats. 
                <br/>
                Duke entered the NCAA Tournament as the #1 seed, led by Shane Battier who was the tournament's Most Valuable Player.
                <br/>
                Duke also set the record for the largest comeback in Final Four history, coming back from down 22 points to beat the Maryland Terrapins.
                <br/>
                <br/>
                UNC lost to Penn State in the Round of 32 in 2001. They were the #2, so that's really bad.
                <br/>
                <br/>
                You can watch highlights from the game <a href='https://www.youtube.com/watch?v=ctRN1ATtORY'>here</a>.
            </Typography>

            <ReturnButton/>
        </div>
    );
}

export default Championship2001;
