import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Uppercase was clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        console.log('Uppercase was clicked'+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleclearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    };
    const handleCapitalizeClick = () => {
        let newText = text
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
        props.showAlert("Converted to Capitalized Words!", "success");
    };
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/\s+/).join(' ').trim();
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    };
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    };
    const [text, setText] = useState('');
    // text = "new text"; //wrond way to change the state
    // setText("new text"); //correct way to change the state
  return (
    <>
    <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{
            backgroundColor: props.textareaBackground,
            color: props.mode === 'light' ? 'black' : 'white'
            }} id="mybox" rows="8"></textarea>
        </div>    
        <button onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
        <button onClick={handleLoClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
        <button onClick={handleclearClick} className="btn btn-primary mx-2">Clear Text</button>
        <button onClick={handleCopyText} className="btn btn-primary mx-2">Copy Text</button>
        <button onClick={handleCapitalizeClick} className="btn btn-primary mx-2">Capitalize Each Word</button>
        <button onClick={handleRemoveExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
