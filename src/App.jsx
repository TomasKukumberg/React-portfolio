import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { education } from './data/education';
import { work } from './data/work';

function App() {

  return (
    <>
      <Sidenav />
      <Main />
      <Timeline id='work' data={work} title='Work' />
      <Timeline id='education' data={education} title='Education' />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
