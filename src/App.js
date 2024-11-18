import { HookUseToggleExample } from './components/HookUseToggleExample';
import { HookUsePrevExample } from './components/HookUsePrevExample';
import { HookUseIntervalExample } from './components/HookUseIntervalExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <HookUseToggleExample />
      <HookUsePrevExample />
      {false && <HookUseIntervalExample/>}
    </div>
  );
}

export default App;
