import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderEditor() {
    return (
      <textarea id="editor"></textarea>
    );
  }

  renderPreview() {
    return (
      <div id="preview">Preview</div>
    );
  }

  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        { this.renderEditor() }
        { this.renderPreview() }
      </div>
    )
  }
}

export default App;