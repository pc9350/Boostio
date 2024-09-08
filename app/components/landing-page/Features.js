import { Dumbbell, Utensils, ChartLine } from 'lucide-react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex text-indigo-500 justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Dumbbell size={40} />}
            title="Personalized Workout Plans"
            description="Get custom workout routines tailored to your fitness level and goals"
          />
          <FeatureCard 
            icon={<Utensils size={40} />}
            title="Smart Meal Suggestions"
            description="Receive healthy recipe ideas and meal plans based on your dietary preferences"
          />
          <FeatureCard 
            icon={<ChartLine size={40} />}
            title="Progress Tracking"
            description="Monitor your fitness journey with easy-to-use progress tracking tools"
          />
        </div>
      </div>
    </section>
  );
}
