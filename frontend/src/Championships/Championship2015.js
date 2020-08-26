import React from 'react';
import {Typography} from '@material-ui/core';
import ChampionshipImage from '../resources/Championship2015.jpg';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';
import ReturnButton from './ReturnButton';

function Championship2015(props) {
    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Duke Championship: 2015</Typography>

            <div class='centeredImage'>
                <img alt='duke championship 1992' src={ChampionshipImage}></img>
            </div>
            
            <Typography align='center' variant='h6'>
                On April 6, 2015, Duke won its fifth national championship in Indianapolis, IN by beating the Wisconsin Badgers. 
                <br/>
                Towards the end of the game, Tyus Jones nailed a dagger three to seal the victory. He was later named Most Oustanding Player. 
                <br/>
                Jones led the Duke team in scoring with 22 points, and Grayson Allen added in 16 more points off the bench.
                <br/>
                <br/>
                UNC lost to Wisconsin in the Sweet Sixteen in 2015. Duke also beat them in <a href='https://www.youtube.com/watch?v=P9XCGc4OVHk'>thrilling fashion</a> that year in front of the Crazies.
                <br/>
                <br/>
                You can watch highlights from the championship game <a href='youtube.com/watch?v=WxSZKIOGqlE'>here</a>.
            </Typography>

            <ReturnButton/>
        </div>
    );
}

export default Championship2015;