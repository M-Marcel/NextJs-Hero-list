import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
               <Image src="/heroes.jpg" width={128} height={77}/>
                <h1>Hero List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/heroes"><a>Heroes Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;