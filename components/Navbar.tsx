export default function Navbar() {
  return (
    <nav className="flex justify-between p-6">
      <h2>Portfolio</h2>

      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
      </div>
    </nav>
  );
}
