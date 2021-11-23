import { createSlice } from '@reduxjs/toolkit'
import { ui } from "./ui"

export const maze = createSlice({
  name: 'maze',
  initialState: {
      username: 'BestFox3',
      response: {}
  },
  reducers: {
    setUserName: (state, action) => {
        state.username = action.payload
        console.log("state.initialState", state.username)
    },
    setResponse: (state, action) => {
        state.response = action.payload
        console.log("state.initialState", state.response)
    }
}})

export const startMaze = ( username) => {
    console.log("username the newest", username)
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ username : "BestFox3" })
    }
    return (dispatch) => {   
        dispatch(ui.actions.setLoading(true))     
        fetch('https://wk16-backend.herokuapp.com/start', options)
        .then((res) => res.json())
        .then((data) => {
            console.log("post", data)
            dispatch(maze.actions.setResponse(data))   
            dispatch(maze.actions.setUserName(username))
            dispatch(ui.actions.setLoading(false)) 
        })
    }
}

export const moveMaze = (direction) => {
    console.log("before of fetch")
  
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "BestFox3",
        type: "move",
        direction: "East",
      }),
    }
    return ( dispatch, direction) =>
      /* dispatch(ui.actions.setLoading(true)); */
      fetch("https://wk16-backend.herokuapp.com/action", option)
        .then(res => res.json())
        .then(data => {
          dispatch(maze.actions.setResponse(data))
          console.log("json i moveMaze", data)
          /* dispatch(ui.actions.setLoading(false)); */
  
          console.log("outside of fetch")
        })
  }






/* const initialState = { */
  
    // coordinates: "0,0",
    // description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
    // actions: [
    //     {
    //         type: "move",
    //         direction: "East",
    //         description: "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
    //     }
    // ]
/*     content: {},
} */