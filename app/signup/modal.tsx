{
  isModalOpen && selectedFighter && (
    <div className="absolute top-0 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded border-4 md:flex m-10">
        <div className="aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9 overflow-hidden">
          <img
            className="w-64 h-full object-cover rounded-t md:rounded-l md:rounded-t-none"
            src={selectedFighter.image}
            alt={selectedFighter.name}
          />
        </div>
        <div className="p-5 w-full mt-4 md:mt-0 md:ml-4">
          <h2 className="text-2xl font-bold text-rose-800">
            {selectedFighter.name}
          </h2>
          <p className="text-gray-600">Starting HP: {selectedFighter.health}</p>
          <p className="text-gray-600">
            Starting Agility: {selectedFighter.agility}
          </p>
          {selectedFighter.backStory.map((paragraph, index) => (
            <p key={index} className={`mt-2 text-black ${roboto.className}`}>
              {paragraph}
            </p>
          ))}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
