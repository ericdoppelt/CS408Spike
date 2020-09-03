import React, { useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';
import ReturnButton from '../CommonComponents/ReturnButton';
import axios from 'axios';

function FunFacts(props) {

    const [fact, setFact] = useState("Loading...");

    useEffect(() => {
    let url = 'https://uselessfacts.jsph.pl/random.json?language=en';
    axios.get(url, {}).then((response)=>{
        setFact(response.data.text);
    }).catch((error) => {
        alert(error)
     });
    }, []);

    return(
        <div class='fullDiv'>
            <Typography align='center' variant="h1"> Random Fun Facts</Typography>
            <Typography align='center' variant='h6'>
                {fact}
            </Typography>
            <ReturnButton/>
        </div>
    );
}

export default FunFacts;
