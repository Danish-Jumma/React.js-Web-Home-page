import React from "react";

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={CardTitle}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          <a
            href={titleHref || "#"}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
          {CardDescription}
        </p>

        {Button && (
          <a
            href={btnHref || "#"}
            className="mt-6 inline-block px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};

function Card() {
  return (
    <section className=" dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard
            image="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
            CardTitle="50+ Best creative website themes & templates"
            titleHref="/#"
            btnHref="/#"
            CardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel lorem sit amet nunc gravida commodo."
            Button="View Details"
          />
          <SingleCard
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            CardTitle="Creative Card Component designs"
            CardDescription="Explore beautiful UI card designs built with modern tools and frameworks to inspire your next project."
            Button="View Details"
          />
          <SingleCard
            image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
            CardTitle="The ultimate UX and UI guide to card design"
            CardDescription="Master UX and UI principles for card components. Learn how to balance aesthetics with functionality."
            Button="View Details"
          />
        </div>
      </div>
    </section>
  );
}

export default Card;
