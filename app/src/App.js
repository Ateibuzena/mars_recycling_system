import React from 'react';
import MarsRecyclingVisualWorkflow from './components/MarsRecyclingVisualWorkflow';
import MarsRecyclingCompleteSuite from './components/MarsRecyclingCompleteSuite';
import MarsRecyclingCanva from './components/MarsRecyclingCanva.jsx';
import ThreeAssetsCanvas from './components/ThreeAssetsCanvas.jsx';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <MarsRecyclingCompleteSuite />
      {/* <MarsRecyclingVisualWorkflow /> */}
      {/* <MarsRecyclingCanva /> */}
      { /* <ThreeAssetsCanvas /> */ }
    </div>
  );
}

export default App;
