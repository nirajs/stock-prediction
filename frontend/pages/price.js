import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {useRouter} from 'next/router';
import Copyright from './copyright';

const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(/static/images/topImage.jpeg)}',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
}));

export default function Price(props) {
    const router = useRouter();
    const { pid, ticker } = router.query
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                {/* Main featured post */}
                <Paper className={classes.mainFeaturedPost}>
                    {/* Increase the priority of the hero background image */}
                    {
                    <img
                        style={{ display: 'none' }}
                        src='/static/images/topImage.jpeg'
                        alt="background"
                    />
                    }
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Prediction for {ticker}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>

                            </Typography>
                            </div>
                        </Grid>
                    </Grid>                    
                </Paper>
                {/* End sub featured posts */}
                </main>
            </Container>
            {/* Footer */}
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    AppJunkies
                </Typography>
                <Copyright />
                </Container>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}