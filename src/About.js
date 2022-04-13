import React from "react";
function About() {
  return (
    <div>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h4 class="text-2xl text-gray-900 font-bold md:text-4xl">
                E-Commerce Website carried out by passionate developers
              </h4>
              <p class="mt-6 text-gray-600">
                Sign up for the latest news, facts, analysis, and original
                stories about our website delivered to you.
              </p>
              <p class="mt-4 text-gray-600">
                We see our customers as invited guests to a party, and we are
                the hosts. It’s our job every day to make every important aspect
                of the customer experience a little bit better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
