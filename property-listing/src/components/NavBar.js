import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" bg-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg text-white font-bold">LOGO</div>
        <div className="space-x-4">
          <Link href="/for-sale">
            For Sale
          </Link>
          <Link href="/to-rent">
            To Rent
          </Link>
          <Link href="#">
            New Developments
          </Link>
          <Link href="#">
            Showdays
          </Link>
          <Link href="#">
            Agencies
          </Link>
          <Link href="#">
            Blog
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/login">
            Login
          </Link>
          <Link href="/signup">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
