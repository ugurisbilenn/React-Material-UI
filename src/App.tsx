
import './App.css';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonRadioGroup } from './components/LessonRadioGroup';
import { LessonTextfield } from './components/LessonTextfield';
import { LessonTypographafy } from './components/LessonTypographafy';

function App() {
  return (
    <div className="App">
      {/* <LessonTypographafy /> */}
      {/* <LessonButton></LessonButton> */}
      {/* <LessonButtonGroup/> */}
      {/* <LessonTextfield/> */}
      <LessonRadioGroup/>
    </div>
  );
}

export default App;
