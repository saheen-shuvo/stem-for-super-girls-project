const ShortDocumentaries = () => {
  const videos = Array(8).fill(
    "https://www.youtube.com/embed/iJezV5JK7tA"
  );

  return (
    <section className="lg:pt-8 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Short Documentaries
          </h2>
          <p className="text-gray-600">
            Real stories of transformation–told by the girls themselves.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 mb-12" />

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-video bg-black rounded-sm overflow-hidden shadow-md"
            >
              <iframe
                className="w-full h-full"
                src={src}
                title={`Short Documentary ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortDocumentaries;
