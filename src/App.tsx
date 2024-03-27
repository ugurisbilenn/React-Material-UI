
import './App.css';
import { LessonButton } from './components/LessonButton';
import { LessonButtonGroup } from './components/LessonButtonGroup';
import { LessonTextfield } from './components/LessonTextfield';
import { LessonTypographafy } from './components/LessonTypographafy';

function App() {
  return (
    <div className="App">
      {/* <LessonTypographafy /> */}
      {/* <LessonButton></LessonButton> */}
      {/* <LessonButtonGroup/> */}
      <LessonTextfield/>
    </div>
  );
}

export default App;
