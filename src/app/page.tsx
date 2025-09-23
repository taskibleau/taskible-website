'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Clock, DollarSign, Menu, X } from 'lucide-react';
import { useState } from 'react';
import SavingsCalculator from '@/components/Calculator';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { trackCalendlyClick, trackEmailClick } from '@/lib/gtag';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCalendlyClick = () => {
    trackCalendlyClick();
  };

  const handleEmailClick = () => {
    trackEmailClick();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 premium-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">Taskible</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">Services</a>
              <a href="#calculator" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">Calculator</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">Testimonials</a>
              <a href="#about" className="text-gray-600 hover:text-blue-800 transition-colors font-medium">About</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-900 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-800 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-gray-600 hover:text-blue-800 transition-colors font-medium">Services</a>
              <a href="#calculator" className="block text-gray-600 hover:text-blue-800 transition-colors font-medium">Calculator</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-blue-800 transition-colors font-medium">Testimonials</a>
              <a href="#about" className="block text-gray-600 hover:text-blue-800 transition-colors font-medium">About</a>
              <a href="#contact" className="block bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-lg text-center font-semibold">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                500+ Australian businesses already saving millions
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight text-shadow">
                Save $43,680+ Annually with
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent"> Skilled Bookkeepers</span>
                <br />at just
                <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent"> $19/hour</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Stop paying $40-80/hour PLUS super, leave, payroll tax & workers comp! Get the same quality from
                <strong className="text-gray-800"> university-qualified Australian-trained professionals</strong> at
                <strong className="text-emerald-600"> $19/hour with zero hidden costs.</strong> No setup fees, no contracts, start saving immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.a
                  href="https://calendly.com/team-taskible/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCalendlyClick}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center shadow-lg premium-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Save $43,680+ This Year - Book Free Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#calculator"
                  className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Calculate My Savings
                </motion.a>
              </div>
              <div className="flex items-center mt-6 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                <span>Free consultation • No super/leave costs • No hidden fees • Cancel anytime</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Potential Savings</h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">Local Employee TRUE Cost</span>
                          <div className="text-xs text-red-600">Salary + Super + Leave + Workers Comp</div>
                        </div>
                        <span className="text-xl font-bold text-red-500">$93,200</span>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-700 font-medium">Taskible Professional</span>
                          <div className="text-xs text-emerald-600">$19/hour - no hidden costs</div>
                        </div>
                        <span className="text-xl font-bold text-emerald-500">$39,520</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Annual Savings</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">$53,680</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">That&apos;s a massive 58% cost reduction!</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-purple-100 rounded-full opacity-20"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Overseas Bookkeeping?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart Australian businesses are already saving thousands while maintaining quality. Here&apos;s why.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Massive Cost Savings</h3>
              <p className="text-gray-600">
                Save 50-70% on bookkeeping costs without compromising on quality or accuracy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualified Professionals</h3>
              <p className="text-gray-600">
                Work with certified bookkeepers who understand Australian accounting standards and regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Benefit from different time zones with round-the-clock support for your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Bookkeeping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive bookkeeping solutions tailored for Australian businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Data Entry & Processing", description: "Accurate transaction recording and bank reconciliation" },
              { title: "Financial Reporting", description: "Monthly P&L, balance sheets, and custom reports" },
              { title: "Payroll Management", description: "Employee pay processing and superannuation compliance" },
              { title: "GST & BAS Preparation", description: "Quarterly BAS lodgment and GST compliance" },
              { title: "Accounts Payable/Receivable", description: "Invoice management and debt collection support" },
              { title: "Budget & Forecasting", description: "Financial planning and cash flow projections" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <SavingsCalculator />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-emerald-800 text-emerald-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-emerald-300 rounded-full mr-2 animate-pulse"></span>
              847 businesses saved $18.6M this year
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-shadow">
              Stop Overpaying for Bookkeeping
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              While competitors hide their pricing and lock you into contracts, we offer transparent $19/hour rates with
              <strong className="text-white"> zero setup fees, no minimums, and no contracts.</strong> Start saving immediately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-emerald-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">✓ Free Setup</div>
                <div className="text-emerald-100 text-sm">Others charge $2,800+</div>
              </div>
              <div className="bg-emerald-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">✓ No Contracts</div>
                <div className="text-emerald-100 text-sm">Cancel anytime</div>
              </div>
              <div className="bg-emerald-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">✓ Start Monday</div>
                <div className="text-emerald-100 text-sm">24-48 hour setup</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/team-taskible/15min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCalendlyClick}
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-200 premium-shadow flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Save $43,680+ This Year - Free Consultation
              </motion.a>
              <motion.a
                href="#calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calculate My Exact Savings
              </motion.a>
            </div>

            <div className="mt-6 text-emerald-100 text-sm">
              ⚡ Free consultation • 90-day guarantee • No credit card required
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Taskible</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Australia&apos;s #1 transparent offshore bookkeeping service.
                <strong className="text-emerald-400"> 847 businesses saved $18.6M</strong> with our
                <strong className="text-blue-400"> $19/hour professionals.</strong>
              </p>
              <div className="flex space-x-4">
                <div className="bg-emerald-800 px-4 py-2 rounded-lg">
                  <div className="text-emerald-300 text-sm">No Setup Fees</div>
                </div>
                <div className="bg-blue-800 px-4 py-2 rounded-lg">
                  <div className="text-blue-300 text-sm">No Contracts</div>
                </div>
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  <div className="text-gray-300 text-sm">24-48hr Start</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">Why Choose Taskible</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />$19/hour transparent pricing</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />Australian-trained professionals</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />University-qualified CPAs</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />90-day guarantee</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Get Started</h4>
              <div className="space-y-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> <a href="mailto:team@taskible.com.au" onClick={handleEmailClick} className="hover:text-emerald-400 transition-colors">team@taskible.com.au</a><br />
                  <strong>Location:</strong> Brisbane, Queensland Australia
                </p>
                <motion.a
                  href="https://calendly.com/team-taskible/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCalendlyClick}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-200 w-full block text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  Book Free Consultation
                </motion.a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2024 Taskible Pty Ltd. All rights reserved. | ABN: 42 156 942 886
              </p>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                <a href="/terms-and-conditions" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
