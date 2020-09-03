import React, { useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import '../CommonStylings/CenteredImage.css';
import '../CommonStylings/FullDiv.css';
import ReturnButton from '../CommonComponents/ReturnButton';

function FunFacts(props) {

    const [fact, setFact] = useState("Loading...");

    
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
