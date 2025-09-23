'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar } from 'lucide-react';

export default function Contact() {



  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your free consultation and discover exactly how much you could save with overseas bookkeeping professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Get a personalized savings estimate and learn how to implement Philippines professionals in your business.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-emerald-800 mb-3">What You&apos;ll Get:</h4>
              <div className="text-left space-y-2 text-emerald-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Custom savings calculation for your business</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Meet your potential Philippines professional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Step-by-step implementation plan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span>Start saving within 24-48 hours</span>
                </div>
              </div>
            </div>

            <motion.a
              href="https://calendly.com/team-taskible/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center premium-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              📅 Book Free 15-Minute Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </motion.a>

            <p className="text-sm text-gray-500 text-center mt-4">
              15-minute call • No sales pressure • Implementation roadmap included
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to transform your bookkeeping operations? Our team of experts is here to help you
                understand exactly how overseas professionals can benefit your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Brisbane, Queensland<br />Australia</p>
                  <p className="text-sm text-gray-500">Serving businesses Australia-wide</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">team@taskible.com.au</p>
                  <p className="text-sm text-gray-500">We respond within 4 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Book a Call</h4>
                  <p className="text-gray-600">Schedule your free consultation</p>
                  <a
                    href="https://calendly.com/team-taskible/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-1 inline-block"
                  >
                    📅 Book Free Consultation →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="font-semibold text-gray-900">Free 15-Minute Consultation</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Book a free consultation where we&apos;ll analyze your current bookkeeping costs and show you
                exactly how much you could save.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Personalized savings calculation</li>
                <li>✓ No obligation or sales pressure</li>
                <li>✓ Expert guidance on overseas hiring</li>
                <li>✓ Custom implementation timeline</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-800 mb-2">Guarantee</h4>
              <p className="text-green-700 text-sm">
                We&apos;re so confident in our service that we offer a 90-day money-back guarantee.
                If you&apos;re not completely satisfied with your overseas bookkeeper, we&apos;ll refund your money.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}