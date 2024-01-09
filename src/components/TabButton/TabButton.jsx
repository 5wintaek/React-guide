export const TabButton = ({ children }) => {
  const onHandleClick = () => {
    console.log('Event On');
  };

  return (
    <li>
      <button onClick={onHandleClick}>{children}</button>
    </li>
  );
};
