//  이 탭의 목적 : 모든 종류의 탭에 적용되려고 하는 tab컴포넌트
// children 은 버튼을 눌렀을 떄 보이는 컴포넌트 (tabcontent를 받고있음)

export const Tabs = ({ children, buttons }) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};
