'use client';

import { motion } from 'framer-motion';
import { Users, Award, Shield, Target, CheckCircle } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: "James Patterson",
      role: "Founder & CEO",
      description: "Former Big 4 accountant with 15+ years in Australian taxation and business advisory.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Maria Santos",
      role: "Head of Operations",
      description: "Expert in international team management and quality assurance processes.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "Technical Director",
      description: "Technology specialist ensuring seamless integration and data security.",
      image: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on quality. Every professional is rigorously vetted and continuously trained on Australian standards."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Bank-level encryption and strict confidentiality protocols protect your sensitive financial information."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We're not just a service provider - we're your strategic partner in business growth and efficiency."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Over 500 Australian businesses trust us with their bookkeeping, saving millions in operational costs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Taskible
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by Australian accountants who understood the cost pressures facing local businesses,
            Taskible bridges the gap between quality and affordability in bookkeeping services.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              In 2019, our founders noticed a growing problem: Australian businesses were struggling with
              rising bookkeeping costs while trying to maintain competitiveness. Traditional local services
              were becoming increasingly expensive, forcing many small to medium businesses to choose between
              quality bookkeeping and profitability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We saw an opportunity to leverage global talent while maintaining Australian standards.
              Today, we&apos;ve helped over 500 businesses reduce their bookkeeping costs by an average of 60%
              while improving accuracy and turnaround times.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Businesses Served</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">$12M+</div>
                <div className="text-sm text-gray-600">Total Savings</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to high-quality bookkeeping services for Australian businesses
              of all sizes, enabling them to focus on growth rather than overhead costs.
            </p>

            <div className="space-y-4">
              {[
                "Reduce operational costs without sacrificing quality",
                "Provide 24/7 support through strategic time zone advantages",
                "Maintain Australian compliance and accounting standards",
                "Enable business growth through improved cash flow"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-xl p-6"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}