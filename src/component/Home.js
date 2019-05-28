import React from 'react'
import MouseMove from './MouseMove'

function Home() {
    return <MouseMove>
                {(mouse, onMouseMove)=><div onMouseMove={onMouseMove}  style={{height:'100vh',backgroundColor: '#282c34'}}>
                                        <h1 style={{position:'absolute',top:mouse.y,left:mouse.x}}> Home </h1>
                                      </div>}
           </MouseMove>
}

export default Home