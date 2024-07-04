import Button from '../UI/Button';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header id="main-header" className="header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
