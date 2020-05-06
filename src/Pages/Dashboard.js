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
                                        <Box>
                                            <img src={player.avatar} height={30} />
                                        </Box>
                                        <Box>
                                            {`@${player.name}`}
                                        </Box>
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
                                        <TableCell>Position</TableCell>
                                        <TableCell align="right">Avatar</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">Github</TableCell>
                                        <TableCell align="right">Wins</TableCell>
                                        <TableCell align="right">Ties</TableCell>
                                        <TableCell align="right">Losses</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {statistics.top10PlayersByWin.map((player, i) => (
                                        <TableRow key={player.id}>
                                            <TableCell align="right">{`#${i}`}</TableCell>
                                            <TableCell align="right"><img src={player.avatar} height={30}/></TableCell>
                                            <TableCell component="th" scope="row">{player.name}</TableCell>
                                            <TableCell align="right">{player.username}</TableCell>
                                            <TableCell align="right">{player.wins}</TableCell>
                                            <TableCell align="right">{player.ties}</TableCell>
                                            <TableCell align="right">{player.losses}</TableCell>
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