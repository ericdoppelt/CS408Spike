import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ( {
    button: {
      marginTop: '15px',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '15px',
      width: "90%",
      height: '70px',
      fontSize: '25px',
    },
    link: {
        textDecoration: 'none',
    }
  } );

function ChampionshipButton(props) {
    const { classes } = props;
    return(
        <Link className={classes.link} to={props.route}>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              >
              {props.message}
            </Button>
        </Link>
    );
}

export default withStyles(styles)(ChampionshipButton);
