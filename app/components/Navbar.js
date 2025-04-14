import Link from 'next/link';
// import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className='flex justify-center '>
      <div className='container flex justify-between items-center py-4'>
        <div>
          <Link href="/">My Portfolio</Link>
        </div>

        <ul className='flex justfiy-between gap-[2rem]'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}