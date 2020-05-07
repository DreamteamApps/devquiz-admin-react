import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    counter: {
        fontSize: 20,
        fontWeight: 700,
        color: 'black'
    },
    counterTitle: {
        fontSize: 22
    }
}));


const Dashboard = (props) => {
    const classes = useStyles();

    const statistics = useSelector(state => state.statistics);

    useEffect(() => {
        console.log(statistics);

    }, [statistics]);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h3>Players</h3>
                        <Box display="flex" flexDirection="row">
                            <Box flexGrow={1}>
                                <div className={classes.counter}>{statistics.totalPlayersNow}</div>
                                <div className={classes.counterTitle}>online</div>
                            </Box>
                            <Box flexGrow={1} >
                                <div className={classes.counter}>{statistics.totalPlayers}</div>
                                <div className={classes.counterTitle}>total</div>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h3>Matches</h3>
                        <Box display="flex" flexDirection="row">
                            <Box flexGrow={1}>
                                <div className={classes.counter}>{statistics.totalMatchesNow}</div>
                                <div className={classes.counterTitle}>now</div>
                            </Box>
                            <Box flexGrow={1} >
                                <div className={classes.counter}>{statistics.totalMatches}</div>
                                <div className={classes.counterTitle}>total</div>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h3>Questions</h3>
                        <Box display="flex" flexDirection="row">
                            <Box flexGrow={1}>
                                <div className={classes.counter}>{statistics.totalAnswered}</div>
                                <div className={classes.counterTitle}>answered</div>
                            </Box>
                            <Box flexGrow={1}>
                                <div className={classes.counter}>{statistics.totalQuestions}</div>
                                <div className={classes.counterTitle}>total</div>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} style={{ minHeight: 400 }}>
                        <h3>Recent Players</h3>
                        <Grid container spacing={3}>
                            {statistics.recentPlayers.map((player) => {
                                return (
                                    <Grid key={player.id} item xs={4}>
                                        <a href={`https://github.com/${player.name}`} target={'blank'}>
                                            <Box>
                                                <img src={player.avatar} height={30} />
                                            </Box>
                                            <Box>
                                                {`@${player.name}`}
                                            </Box>
                                        </a>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper} style={{ minHeight: 400 }}>
                        <h3>Top Players by win</h3>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center">Github</TableCell>
                                        <TableCell align="center">Wins</TableCell>
                                        <TableCell align="center">Ties</TableCell>
                                        <TableCell align="center">Losses</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {statistics.top10PlayersByWin.map((player, i) => (
                                        <TableRow key={player.id}>
                                            <TableCell align="center">{`#${i+1}`}</TableCell>
                                            <TableCell align="center">
                                                <Box>
                                                    <img src={player.image_url} height={30} />
                                                </Box>
                                                <Box>
                                                    {`@${player.username}`}
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">{player.wins}</TableCell>
                                            <TableCell align="center">{player.ties}</TableCell>
                                            <TableCell align="center">{player.losses}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};


export default Dashboard;