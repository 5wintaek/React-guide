import { Header } from '@/components';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import { CoreConcept } from '@/components';
import { TabButton } from '@/components';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const onHandleClick = (selectedButton) => {
    // selectedButton => components, jsx, props,state
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => onHandleClick('components')}
            >
              Compo
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => onHandleClick('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => onHandleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => onHandleClick('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
