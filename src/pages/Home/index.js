import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { submitValues } from 'store/reducers/matchReducer'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    paddingBottom: '20px',
  },
  grid: {
    height: '100vh',
    marginTop: '10px',
  },
  paperMain: {
    margin: 'auto',
    height: '100vh',
    width: '100%',
  },
  paper: {
    textAlign: 'center',
  },
}))

const Home = () => {
  const [valueFirst, setValueFirst] = useState(0)
  const [valueSecond, setValueSecond] = useState(0)

  const classes = useStyles()
  const dispatch = useDispatch()
  const matchCombinations = useSelector(
    (state) => state.match.matchCombinations
  )

  const matchs = useSelector((state) => state.match.orginalMatchs)

  const handleSubmit = () => {
    dispatch(
      submitValues({
        betterMatch:
          valueFirst >= valueSecond
            ? matchCombinations[0][0]
            : matchCombinations[0][1],
      })
    )
    setValueFirst(0)
    setValueSecond(0)
  }

  return (
    <div className={classes.root} style={{ paddingBottom: '10px' }}>
      <Grid container spacing={1} className={classes.grid}>
        <Paper className={`${classes.paperMain} ${classes.paper}`}>
          <h1 style={{ marginBottom: '60px' }}>Wellcome to match app</h1>

          {matchCombinations.length !== 0 ? (
            <>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <div>
                    <h3>{matchCombinations[0][0]}</h3>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div>
                    <TextField
                      type='number'
                      variant='filled'
                      value={valueFirst}
                      onChange={(event) => setValueFirst(event.target.value)}
                    />
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div>
                    <TextField
                      type='number'
                      variant='filled'
                      value={valueSecond}
                      onChange={(event) => setValueSecond(event.target.value)}
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <h3>{matchCombinations[0][1]}</h3>
                  </div>
                </Grid>
              </Grid>
              <Button
                onClick={handleSubmit}
                variant='contained'
                style={{
                  backgroundColor: 'green',
                  marginTop: '1%',
                  width: '75%',
                  color: '#ffff',
                  borderRadius: '10',
                }}
                sx={{ mt: 2, mb: 2 }}
              >
                Submit
              </Button>
            </>
          ) : (
            <div style={{ height: 400, width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <h3>Position</h3>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <h3>Name</h3>
                  </div>
                </Grid>

                <Grid item xs={3}>
                  <div>
                    <h3>Score</h3>
                  </div>
                </Grid>
                {matchs.map((match, index) => {
                  return (
                    <>
                      <Grid item xs={3}>
                        <h3>{index + 1}</h3>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <h3>{match.name}</h3>
                        </div>
                      </Grid>

                      <Grid item xs={3}>
                        <div>
                          <h3>{match.score}</h3>
                        </div>
                      </Grid>
                    </>
                  )
                })}
              </Grid>
            </div>
          )}
        </Paper>
      </Grid>
    </div>
  )
}

export default Home
