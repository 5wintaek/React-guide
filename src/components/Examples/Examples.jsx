import { useState } from 'react';
import { TabButton } from '@/components';
import { EXAMPLES } from '../../data';
import { Section } from '@/components';
import { Tabs } from '@/components';

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
    <Section title="examples" id="examples">
      <Tabs
        ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => onHandleClick('components')}
            >
              Compo
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => onHandleClick('jsx')}>
              작스
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => onHandleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => onHandleClick('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};
