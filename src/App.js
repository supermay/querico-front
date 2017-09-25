import React, { Component } from 'react';
import Background from './components/Background'

const backgrounds = [
  {
    id: 1,
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=266x355:format=jpg/path/s3d11e25f9890fdec/image/i2d8895608ce1c2a9/version/1499290693/image.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>QueRico Woerden</h1>
        <Background backgrounds={backgrounds} />
      </div>
    );
  }
}

export default App;
