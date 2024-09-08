"use client";

import { useState } from "react";
import Airtable from "airtable";

// const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(
//   process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
// );

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
    const pat = process.env.NEXT_PUBLIC_AIRTABLE_PAT;

    try {
      const base = new Airtable({ apiKey: pat }).base(baseId);

      await base("Email-List").create([{ fields: { Email: email } }]);

      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error adding email to Airtable: ", error);
    }
  };

  return (
    <section
      id="waitlist"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-4">
          Be the First to Experience Our App!
        </h3>
        <p className="mb-8 max-w-xl mx-auto">
          Sign up to get early access to personalized workout routines, meal
          plans, and more. Join the community that cares about your well-being.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center border-b border-white py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white placeholder-gray-200 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="flex-shrink-0 bg-white text-indigo-500 hover:bg-gray-100 border-4 text-sm py-1 px-4 rounded-full transition-all ease-in-out duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-6 text-lg">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>
              Thank you for joining our waitlist! 🎉 We&#39;ll keep you updated on
              our launch.
            </p>
          </div>
        )}

        <div className="mt-12">
          <p className="text-sm">
            Join <strong>10,000+</strong> others waiting to transform their
            fitness journey with us!
          </p>
        </div>
      </div>
    </section>
  );
}
