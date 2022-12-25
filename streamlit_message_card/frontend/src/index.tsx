
import React from "react"
import ReactDOM from "react-dom"
import MessageCard from "./MessageCard"

// Lots of import to define a Styletron engine and load the light theme of baseui
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"

const engine = new Styletron()

// Wrap your CustomSlider with the baseui them
ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
        <MessageCard />
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
)