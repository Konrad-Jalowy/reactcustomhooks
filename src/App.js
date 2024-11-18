import { HookUseToggleExample } from './components/HookUseToggleExample';
import { HookUsePrevExample } from './components/HookUsePrevExample';
import { HookUseIntervalExample } from './components/HookUseIntervalExample';
import { HookUseTimeoutExample } from './components/HookUseTimeoutExample';
import { HookUseBooleanExample } from './components/HookUseBooleanExample';
import './App.css';
//uncomment false to see hook in action
function App() {
  return (
    <div className="App">
      {false && <HookUseToggleExample />}
      {false && <HookUsePrevExample /> }
      {true && <HookUseIntervalExample/>}
      {true && <HookUseTimeoutExample/>}
      {true && <HookUseBooleanExample/>}
    </div>
  );
}

export default App;
