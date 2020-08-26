import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ( {
    button: {
      marginTop: '60px',
      marginLeft: '35%',
      marginRight: '35%',
      marginBottom: '30px',
      width: "30%",
      height: '50px',
      fontSize: '20px',
    },
    link: {
        textDecoration: 'none',
    }
  } );

function ReturnButton(props) {
    const { classes } = props;
    return(
        <Link className={classes.link} to={"/"}>
            <Button
              className={classes.button}
              variant='contained'
              >
              Return to Main Menu
            </Button>
        </Link>
    );
}

export default withStyles(styles)(ReturnButton);