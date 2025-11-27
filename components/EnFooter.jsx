export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-body-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <img src="/assets/logo-sekyung-symbol.png" alt="Sekyungnet"
            className="h-6 w-auto scale-[3] origin-center mr-3" />
          <span>© {new Date().getFullYear()} Sekyung Net</span>
        </div>

        <div className="flex gap-6 text-body-sm">
          <a href="#manufacturing" className="hover:text-brand">Company</a>
          <a href="#products" className="hover:text-brand">Products</a>
          <a href="#facilities" className="hover:text-brand">Facilities</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </div>

      </div>
    </footer>
  );
}