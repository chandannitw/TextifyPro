import React, { useState } from 'react';
import './Preview.css';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const [history, setHistory] = useState([text]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  let speechInstance;

  // Button action handlers
  const handleUpClick = () => {
    updateHistory(text.toUpperCase());
    props.showAlert('Converted to UpperCase', 'success');
  };

  const handleLowClick = () => {
    updateHistory(text.toLowerCase());
    props.showAlert('Converted to LowerCase', 'success');
  };

  const handleClearClick = () => {
    updateHistory('');
    props.showAlert('Text cleared', 'success');
  };

  const handleRemoveWhitespace = () => {
    updateHistory(text.replace(/\s+/g, ' ').trim());
    props.showAlert('Extra whitespace removed', 'success');
  };

  const handleRemoveSpecialChars = () => {
    updateHistory(text.replace(/[^a-zA-Z0-9\s]/g, ''));
    props.showAlert('Special characters removed', 'success');
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard', 'success');
  };

  const handleReverseText = () => {
    updateHistory(text.split('').reverse().join(''));
    props.showAlert('Text reversed', 'success');
  };

  const handleStartListening = () => {
    if (!isSpeaking) {
      speechInstance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speechInstance);
      setIsSpeaking(true);
      speechInstance.onend = () => setIsSpeaking(false);
      props.showAlert('Text-to-Speech started', 'success');
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      props.showAlert('Text-to-Speech stopped', 'info');
    }
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(history[historyIndex - 1]);
      props.showAlert('Undo applied', 'success');
    } else {
      props.showAlert('Nothing to undo', 'warning');
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setText(history[historyIndex + 1]);
      props.showAlert('Redo applied', 'success');
    } else {
      props.showAlert('Nothing to redo', 'warning');
    }
  };

  const handleOnChange = (event) => setText(event.target.value);

  const updateHistory = (newText) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newText);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setText(newText);
  };

  // Helper functions for text summary
  const getWordCount = () => text.split(/\s+/).filter((word) => word.length > 0).length;
  const getCharacterCount = () => text.length;
  const getLineCount = () => text.split('\n').length;

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        {/* Button Group - Two Lines of 5 Buttons Each */}
        <div className="row button-row">
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleUpClick}>
              Convert to UpperCase
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleLowClick}>
              Convert to LowerCase
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleClearClick}>
              Clear Text
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleRemoveWhitespace}>
              Remove Whitespace
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleRemoveSpecialChars}>
              Remove Special Characters
            </button>
          </div>
        </div>

        <div className="row button-row">
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleCopyToClipboard}>
              Copy to Clipboard
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleReverseText}>
              Reverse Text
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleStartListening}>
              {isSpeaking ? 'Stop Listening' : 'Start Listening'}
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleUndo}>
              Undo
            </button>
          </div>
          <div className="col-md-2 mb-3">
            <button className="btn btn-primary w-100" onClick={handleRedo}>
              Redo
            </button>
          </div>
        </div>
      </div>

      {/* Text Summary Section */}
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-info h-100">
              <div className="card-body">
                <h5 className="card-title">Words</h5>
                <p className="card-text">{getWordCount()}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <h5 className="card-title">Characters</h5>
                <p className="card-text">{getCharacterCount()}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card text-white bg-warning h-100">
              <div className="card-body">
                <h5 className="card-title">Lines</h5>
                <p className="card-text">{getLineCount()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reading Time */}
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card text-white bg-dark">
              <div className="card-body">
                <h5 className="card-title">Estimated Reading Time</h5>
                <p className="card-text">{(0.008 * getWordCount()).toFixed(2)} Minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <h3 className="mt-4">Text Preview</h3>
        <div className="preview-container">
          <div className="preview-card">
            <p className="preview-text">{text.length > 0 ? text : 'Nothing to preview'}</p>
          </div>
        </div>
      </div>
    </>
  );
}
