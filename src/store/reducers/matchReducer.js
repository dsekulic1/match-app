import { createSlice } from '@reduxjs/toolkit'
const array = [
  { name: 'Barcelona', score: 0 },
  { name: 'Real', score: 0 },
  { name: 'Bayern', score: 0 },
  { name: 'Manchester', score: 0 },
  { name: 'Liverpool', score: 0 },
  { name: 'Juventus', score: 0 },
]
const initialState = {
  orginalMatchs: array,
  matchCombinations: [
    ...array.flatMap((v1, i) =>
      array.slice(i + 1).map((v2) => [v1.name, v2.name])
    ),
  ],
}

export const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    submitValues: (state, { payload }) => {
      console.log(payload)
      // find and increase value
      const indexOfFirstElement = state.orginalMatchs.findIndex((object) => {
        return object.name === payload.betterMatch
      })

      // sort
      state.orginalMatchs[indexOfFirstElement].score += 1
      state.orginalMatchs = state.orginalMatchs.sort(
        (a, b) => b.score - a.score
      )
      // delete used match

      state.matchCombinations = state.matchCombinations.slice(
        1,
        state.matchCombinations.length
      )
    },
  },
})

export const { submitValues } = matchSlice.actions

export default matchSlice.reducer
