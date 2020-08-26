import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';
import './HomePage.css';
function HomePage(props) {
    return(
        <div>
            <Typography variant="h1"> Welcome to my CS408 Spike!</Typography>
            <Typography variant="h3"> Please choose a Duke NCAA National Champtionship.</Typography>
            {createButtonYear(1991)}
            {createButtonYear(1992)}
            {createButtonYear(2001)}
            {createButtonYear(2010)}
            {createButtonYear(2015)}
        </div>
    );
}

function createButtonYear(year) {
    return(
        <Link to={"/" + year}>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              size='large'
              className='yearButton'
              >
              {year}
            </Button>
        </Link>
    );
}

export default HomePage;