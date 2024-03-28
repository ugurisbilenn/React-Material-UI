
import './App.css';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonRadioExample } from './components/LessonRadioExample';
import { LessonRadioGroup } from './components/LessonRadioGroup';
import { LessonSelect } from './components/LessonSelect';
import { LessonTextfield } from './components/LessonTextfield';
import { LessonTypographafy } from './components/LessonTypographafy';

function App() {
  return (
    <div className="App">
      {/* <LessonTypographafy /> */}
      {/* <LessonButton></LessonButton> */}
      {/* <LessonButtonGroup/> */}
      {/* <LessonTextfield/> */}
      {/* <LessonRadioGroup/> */}
      {/* <LessonRadioExample/> */}
      <LessonSelect/>
      
    </div>
  );
}

export default App;
