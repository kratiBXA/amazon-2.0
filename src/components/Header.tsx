import Link from 'next/link';
import './Header.css';

export default function Header() {
    return (
    <header className="header">
      <div className="header-left">
        <Link href="/" className="logo">MyStore</Link>
        <Link href="/listing" className="nav-highlight">All Products</Link>
      </div>
    <nav className="header-right">
      
        <Link href="/login" className="nav-button">Login</Link>
        <Link href="/register" className="nav-button">Register</Link>
      </nav>
    </header>
  );
}
