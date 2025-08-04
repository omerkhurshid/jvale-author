export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient glow">Tales of Moonfire</span>
            <br />
            <span className="text-foreground/80">and Shattered Realms</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Where magic costs more than gold, and love might be the most dangerous spell of all
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/books"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore the Books →
            </a>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient glow">
            The Veilbound Saga
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Book 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-96 bg-secondary rounded-lg mb-6 flex items-center justify-center">
                <span className="text-foreground/50">Marked by Moonfire</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Marked by Moonfire</h3>
              <p className="text-foreground/70">Book One of The Veilbound Saga</p>
            </div>

            {/* Book 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-96 bg-secondary rounded-lg mb-6 flex items-center justify-center">
                <span className="text-foreground/50">Shattered World</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Shattered World</h3>
              <p className="text-foreground/70">The First Gate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}