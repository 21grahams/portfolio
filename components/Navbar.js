import Link from "next/Link";

const Navbar = () => {

  const styles = {
    display: 'flex',
    background: 'grey',
    justifyContent: 'space-between',
    padding: '1rem'
  }

  return (
  <div style={styles}>
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <Link href="/contact">
      <button>Contact Me</button>
    </Link>
    <Link href="/projects">
      <button>Check Out My Projects</button>
    </Link>
  </div>
  )
};

export default Navbar;