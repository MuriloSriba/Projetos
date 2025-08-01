export function Hero() {
  return (
    <section className="relative h-96 overflow-hidden">
      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5604064-7b3c-41af-a972-2e90afb40653.png" alt="Vista aérea de Florianópolis" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Eventos em Florianópolis</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">Descubra os melhores eventos culturais da ilha da magia</p>
          <button className="mt-6 bg-blue within px-6 py-3 rounded-lg text-white font-semibold hover:bg-opacity-90 transition duration-300">
            Ver eventos
          </button>
        </div>
      </div>
    </section>
  );
}
