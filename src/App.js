import { HookUseToggleExample } from './components/HookUseToggleExample';
import { HookUsePrevExample } from './components/HookUsePrevExample';
import { HookUseIntervalExample } from './components/HookUseIntervalExample';
import './App.css';
//uncomment false to see hook in action
function App() {
  return (
    <div className="App">
      {false && <HookUseToggleExample />}
      {false && <HookUsePrevExample /> }
      {true && <HookUseIntervalExample/>}
    </div>
  );
}

export default App;
