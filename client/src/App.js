import React from 'react'
import { Typography,AppBar } from '@material-ui/core'
import {Videoplayer} from './components/VideoPlayer'
const App = () => {
    return (
        <div>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
        </div>
    )
}

export default App
