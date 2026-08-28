export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">سوق سوريا</h1>
          <p className="text-lg mt-2">منصة التجارة الإلكترونية السورية</p>
        </div>
      </header>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">المنتجات المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-6xl">📦</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">منتج {item}</h3>
                <p className="text-gray-600 mt-2">وصف المنتج هنا</p>
                <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2026 سوق سوريا - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </main>
  );
}
