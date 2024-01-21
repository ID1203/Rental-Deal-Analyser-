import React from "react";

export default function Projects({ house }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* ... Include your site's header component here ... */}

      {/* House Details Section */}
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={house.imageUrl}
              alt={`House at ${house.address}`}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 md:ml-6">
            <h2 className="text-3xl font-bold mt-4 md:mt-0">{house.address}</h2>
            <p className="text-xl mt-2">${house.price.toLocaleString()}</p>
            {/* Additional information can go here */}
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4">Deal Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Repeat for each metric */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold">Metric Name</h4>
              <p>{/* Metric value */}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* ... Include your site's footer component here ... */}
    </div>
  );
}
