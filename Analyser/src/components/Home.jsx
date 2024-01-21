import React from "react";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-blue-100 text-gray-800 p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Analyze Housing Deals Quickly & Efficiently
          </h2>
          <p className="mb-8">
            Make informed investment decisions with our easy-to-use analysis
            tools.
          </p>
          <a
            href="/finder"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl text-center font-semibold mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Repeat this block for each feature */}
            <div className="bg-white p-4 shadow rounded">
              <h4 className="font-bold mb-2">Feature 1</h4>
              <p>Describe the feature here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-gray-200 p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Analyze Your First Deal?
        </h3>
        <a
          href="/sign-up"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Housing Deal Analyzer. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};
