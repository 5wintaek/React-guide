import { useState } from 'react';
import { TabButton } from '@/components';
import { EXAMPLES } from '../../data';

export const Examples = () => {
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
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => onHandleClick('props')}>
          Props
        </TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => onHandleClick('state')}>
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
};
