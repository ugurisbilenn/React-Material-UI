
import './App.css';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonCheckbox } from './components/LessonCheckbox';
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
      {/* <LessonSelect/> */}
      <LessonCheckbox/>
    </div>
  );
}

export default App;
