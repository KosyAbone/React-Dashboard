import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./toolsPage.css"


const ToolsPage = () => {
    //Hooks to track word and color selected
    const [word, setWord] = useState('');
    const [color, setColor] = useState("#ffffff");
    
    let wordCount = 0;

    //function to count the letters in the word
    const getWordCount = (event) => {
        const input = event.target.value;
        setWord(input);
    }

    //Remove space and count letters
    wordCount = word.replace(/\s/g,"").length;

    //function to set color when changed by the user
    const handleColorChange = (selectedColor) => {
        setColor(selectedColor.hex);
    };

    //html for the tools page
    return (
        <div className="tools-main-container">
        <h1>Customised Tools</h1>

        <div className="tool-container">
            <div className="tool-card">
                <h3 className="word-h3">Word Count Tool</h3>
                <label className="word-label">Enter a word below</label>
                <input className="word-input" type="text" value={word} onChange={getWordCount} placeholder="Enter a word here"></input>
                <h2 className="word-h2">Word Count : {wordCount}</h2>
            </div>
            <div className="tool-card">
                <h3 className="color-h3">Color Picker Tool</h3>
                <div className="color-picker">
                    <ChromePicker color={color} onChange={handleColorChange} />
                </div>
                <div className="selected-color">
                    <h2 className="color-h2">Selected Color</h2>
                    <div className="color-preview" style={{ backgroundColor: color }}>{color}</div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ToolsPage;