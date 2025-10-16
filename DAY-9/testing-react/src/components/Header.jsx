function Header({ title }) {
  return <h1 data-testid="todo-header">{title.toUpperCase()}</h1>;
}

export default Header;
