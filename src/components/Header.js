
function Header({ onDarkModeClick, state }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
      {state ? "Dark" : "Light" } Mode
      </button>
    </header>
  );
}

export default Header;
//having trouble getting the text content to change. How can I pass down the state from parent to here?
//is this really how I can do it?

