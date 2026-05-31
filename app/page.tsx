import Link from "next/link";
import Image from "next/image";
export default function Home() 
{
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div>
          <h1 className="text-2xl font-bold">LOKYO</h1>
          <p className="text-3xl text-gray-400">PET SHOP</p>
        </div>

        <div className="flex gap-6">
          <a href="https://maps.app.goo.gl/x8yspZZyXLqjoaLh7" target="_blank" rel="noopener noreferrer">
            Location
          </a>

          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
        <div className="flex items-center gap-4">
  

  <h1 className="text-6xl md:text-7xl font-bold mb-6">
  <div className="flex items-baseline justify-center">
    LOKYO
    <Image
      src="/pawbg.png"
      alt="paw"
      width={80}
      height={80}
      className="ml-0 translate-y-4"
    />
  </div>
  <div className="flex items-baseline justify-center">
    PET
    <Image
      src="/pawbg kebalik.png"
      alt="paw"
      width={80}
      height={80}
      className="ml-2 translate-y-6"
    />
    SHOP
  </div>
</h1>
</div>

        <p className="max-w-2xl text-gray-400 text-lg mb-8">
          Menyediakan segala pakan & grooming untuk kebutuhan kucing Anda dengan kualitas terbaik dan harga terjangkau.
        </p>

        <div className="flex gap-4">
          <Link
        href="/katalog"
        className="bg-white border text-black border-black px-6 py-3 rounded-lg">
        KATALOG MAKANAN
          </Link>

          <Link
        href="/pesan"
        className="border border-white px-6 py-3 rounded-lg">
        BOOKING GROOMING
          </Link>
        </div>
      </section>
    </main>
    
  );
}
