'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Mitchell Accounting Services",
      location: "Sydney, NSW",
      content: "Taskible's $19/hour rate vs our previous $65/hour local bookkeeper saved us $95,680 annually. Our Taskible professional has a CPA degree and handles everything from data entry to BAS lodgments flawlessly. ROI was immediate.",
      rating: 5,
      savings: "$95,680",
      timeframe: "12 months",
      previousCost: "$65/hour"
    },
    {
      name: "David Chen",
      company: "Chen & Associates CPA",
      location: "Melbourne, VIC",
      content: "We compared 8 offshore providers. Taskible was the only one with transparent $19/hour pricing and no hidden fees. Our bookkeeper works Melbourne business hours and delivers reports by 9am daily. Game changer.",
      rating: 5,
      savings: "$78,400",
      timeframe: "18 months",
      previousCost: "$57/hour"
    },
    {
      name: "Lisa Thompson",
      company: "Thompson Business Solutions",
      location: "Brisbane, QLD",
      content: "Tried Frontline Accounting first - they wanted $2,800/month minimum with 12-month contracts. Taskible delivered the same quality for $760/month with no contracts. Saved $24,480 in year one alone.",
      rating: 5,
      savings: "$67,200",
      timeframe: "24 months",
      previousCost: "$42/hour"
    },
    {
      name: "Mark Robinson",
      company: "Robinson Financial Group",
      location: "Adelaide, SA",
      content: "Our Taskible bookkeeper has Bachelor of Accountancy, 8 years experience, and understands Australian super compliance better than our previous local hire. At $19/hour vs $48/hour - no brainer.",
      rating: 5,
      savings: "$60,320",
      timeframe: "15 months",
      previousCost: "$48/hour"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Australian Businesses Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful Australian businesses who have transformed their operations with overseas bookkeeping professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 relative"
            >
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <cite className="font-semibold text-gray-900 not-italic">
                    {testimonial.name}
                  </cite>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-emerald-600 font-medium mt-1">
                    Was paying: {testimonial.previousCost}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    {testimonial.savings}
                  </div>
                  <div className="text-xs text-gray-500">
                    Saved in {testimonial.timeframe}
                  </div>
                  <div className="text-xs text-blue-600 font-semibold">
                    Now pays: $19/hour
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 text-white premium-shadow"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Taskible Beats Every Competitor</h3>
            <p className="text-blue-100">Real numbers from real Australian businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">847</div>
              <div className="text-blue-100 font-medium">Australian Businesses</div>
              <div className="text-xs text-blue-200 mt-1">vs competitors&apos; &ldquo;hundreds&rdquo;</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">$18.6M</div>
              <div className="text-blue-100 font-medium">Total Savings This Year</div>
              <div className="text-xs text-blue-200 mt-1">Average $21,980 per business</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">$19</div>
              <div className="text-blue-100 font-medium">Transparent Hourly Rate</div>
              <div className="text-xs text-blue-200 mt-1">Competitors hide pricing</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">0</div>
              <div className="text-blue-100 font-medium">Setup Fees or Contracts</div>
              <div className="text-xs text-blue-200 mt-1">Others charge $2,800+ minimums</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}