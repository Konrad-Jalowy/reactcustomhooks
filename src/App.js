import { HookUseToggleExample } from './components/HookUseToggleExample';
import { HookUsePrevExample } from './components/HookUsePrevExample';
import { HookUseIntervalExample } from './components/HookUseIntervalExample';
import { HookUseTimeoutExample } from './components/HookUseTimeoutExample';
import { HookUseBooleanExample } from './components/HookUseBooleanExample';
import { HookUseRenderCountExample } from './components/HookUseRenderCountExample';
import { HookUseOnceExample } from './components/HookUseOnceExample';
import HookUseFirstRenderExample from './components/HookUseFirstRenderExample';
import HookUseArrayExample from './components/HookUseArrayExample';
import HookUseEventListenerExample from './components/HookUseEventListenerExample';
import { HookUseHoverExample } from './components/HookUseHoverExample';
import { ClickOutside } from './components/HookUseClickOutsideExample';
import './App.css';
//uncomment false to see hook in action
function App() {
  return (
    <div className="App">
      {false && <HookUseToggleExample />}
      {false && <HookUsePrevExample /> }
      {false && <HookUseIntervalExample/>}
      {false && <HookUseTimeoutExample/>}
      {false && <HookUseBooleanExample/>}
      {false && <HookUseRenderCountExample/>}
      {false && <HookUseOnceExample/>}
      {true && <HookUseFirstRenderExample/>}
      {true && <HookUseArrayExample/>}
      {true && <HookUseEventListenerExample/>}
      {true && <HookUseHoverExample/>}
      {true && <ClickOutside/>}
    </div>
  );
}

export default App;
