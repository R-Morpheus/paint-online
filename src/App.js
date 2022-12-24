import React from "react";
import './styles/app.css'
import Canvas from "./components/Canvas";
import ToolBar from "./components/ToolBar";
import SettingBar from "./components/SettingBar";

function App() {
    return (
        <div className="app">
            <ToolBar/>
            <SettingBar/>
            <Canvas/>
        </div>
    );
}

export default App;
