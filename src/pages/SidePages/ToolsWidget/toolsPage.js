import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./toolsPage.css"


const ToolsPage = () => {
    const [word, setWord] = useState('');
    const [color, setColor] = useState("#ffffff");
    
    let wordCount = 0;

    //function to count the letters in the word
    const getWordCount = (event) => {
        const input = event.target.value;
        setWord(input);
    }

    wordCount = word.length;

    const handleColorChange = (selectedColor) => {
        setColor(selectedColor.hex);
    };

    return (
        <div className="tools-main-container">
        <h1>Customised Tools</h1>

        <div className="tool-container">
            <div className="tool-card">
                <h2 className="word-h2">Word Count</h2>
                <label className="word-label">Enter a word below</label>
                <input className="word-input" type="text" value={word} onChange={getWordCount} placeholder="Enter a word here"></input>
                <h3 className="word-h3">Word Count : {wordCount}</h3>
            </div>
            <div className="tool-card">
                <h2 className="color-h2">Color Picker Tool</h2>
                <div className="color-picker">
                    <ChromePicker color={color} onChange={handleColorChange} />
                </div>
                <div className="selected-color">
                    <h4 className="color-h4">Selected Color</h4>
                    <div className="color-preview" style={{ backgroundColor: color }}>{color}</div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ToolsPage;