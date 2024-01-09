import { Header } from '@/components';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import { CoreConcept } from '@/components';
import { TabButton } from '@/components';
function App() {
  const onHandleClick = () => {
    console.log('Event On - selected');
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={onHandleClick}>Components</TabButton>
            <TabButton onSelect={onHandleClick}>JSX</TabButton>
            <TabButton onSelect={onHandleClick}>Props</TabButton>
            <TabButton onSelect={onHandleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
