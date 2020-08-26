import React from 'react';
import {Typography} from '@material-ui/core';
import ChampionshipImage from '../resources/Championship1992.jpg';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';
import ReturnButton from './ReturnButton';

function Championship1992(props) {
    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Duke Championship: 1992</Typography>

            <div class='centeredImage'>
                <img alt='duke championship 1992' src={ChampionshipImage}></img>
            </div>
            
            <Typography align='center' variant='h6'>
                On April 6, 1992, Duke won its second national championship in Minneapolis, MN by beating the Michigan Wolverines. 
                <br/>
                Christian Laettner scored 115 points in the entire tournament and hit "The Shot" against Kentucky in the Final Four, as seen above.
                <br/>
                Bobby Hurley was the Most Outstanding Player of the tournament.
                <br/>
                <br/>
                UNC lost to Ohio State in the Sweet Sixteen in 1992. That sucks.
                <br/>
                <br/>
                You can watch the game <a href='https://www.youtube.com/watch?v=QU4A9nkyx1M'>here</a>.
            </Typography>

            <ReturnButton/>
        </div>
    );
}

export default Championship1992;
