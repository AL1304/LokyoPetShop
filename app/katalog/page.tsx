import Link from "next/link";

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Makanan Kucing",
      price: "Rp 50.000",
      image: "/cat-food.jpg",
    },
    {
      id: 2,
      name: "Shampoo Kucing",
      price: "Rp 35.000",
      image: "/shampoo.jpg",
    },
    {
      id: 3,
      name: "Pasir Kucing",
      price: "Rp 60.000",
      image: "/pasir.jpg",
    },
  ];

  return (
    <div className="p-8">
      <Link
        href="/"
        className="inline-block mb-6 bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        ← Kembali ke Home
      </Link>

      <h1 className="text-8xl font-bold text-center mb-8">UNDER MAINTENANCE</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl shadow-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>

            <p className="text-green-600 font-bold">{product.price}</p>

            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
