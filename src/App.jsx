import { Header } from '@/components';
import componentImg from './assets/components.png';
import { CoreConcepts } from '@/components';
import { Examples } from '@/components';
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
