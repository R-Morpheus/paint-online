import React from 'react';
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import "../styles/toolBar.css"
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const ToolBar = () => {

    const changeColor = (e) => {
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }
    return (
        <div className='toolbar'>
            <button className='toolbar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className='toolbar__btn rect' onClick={() => toolState.setTool(new Rect(canvasState.canvas))}></button>
            <button className='toolbar__btn circle' onClick={() => toolState.setTool(new Circle(canvasState.canvas))}></button>
            <button className='toolbar__btn eraser' onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}></button>
            <button className='toolbar__btn line' onClick={() => toolState.setTool(new Line(canvasState.canvas))}></button>
            <input onChange={e => changeColor(e)} type="color"/>
            <button className='toolbar__btn undo'></button>
            <button className='toolbar__btn redo'></button>
            <button className='toolbar__btn save'></button>
        </div>
    );
};

export default ToolBar;