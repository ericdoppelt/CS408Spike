import React, { useState, useEffect } from 'react';
import {Typography} from '@material-ui/core';
import ChampionshipButton from './ChampionshipButton';
import ChampionshipImage from '../resources/ChampionshipBanner.jpeg';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';


    
function HomePage(props) {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
          setCurrentTime(data.time);
        });
      }, []);


    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Welcome to my CS408 Spike!</Typography>
            <Typography align='center' variant="h3"> Please choose a Duke NCAA National Champtionship.</Typography>
            <Typography> {currentTime} </Typography>
            <div class='centeredImage'>
                <img alt='duke championship banners' src={ChampionshipImage}></img>
            </div>
            <ChampionshipButton year='1991'/>
            <ChampionshipButton year='1992'/>
            <ChampionshipButton year='2001'/>
            <ChampionshipButton year='2010'/>
            <ChampionshipButton year='2015'/>
        </div>
    );


}

function getTime() {
    let time;
    fetch('/time').then(res => res.json()).then(data => (time = data));
    console.log(time);
    return time;
}

export default (HomePage);