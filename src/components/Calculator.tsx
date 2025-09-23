'use client';

import { motion } from 'framer-motion';
import { Calculator, TrendingDown } from 'lucide-react';
import { useState } from 'react';

export default function SavingsCalculator() {
  const [localSalary, setLocalSalary] = useState('80000');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');

  // Only Philippines - highest quality option
  const overseasRate = { hourly: 19, annual: 39520, name: 'Philippines' };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    setLocalSalary(value);
  };

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    setHoursPerWeek(value);
  };

  const salaryNumber = parseInt(localSalary) || 0;
  const hoursNumber = parseInt(hoursPerWeek) || 0;

  // Hidden employment costs for local employees
  const superannuation = salaryNumber * 0.115; // 11.5% super
  const annualLeave = salaryNumber * 0.076; // 4 weeks annual leave (~7.6%)
  const sickLeave = salaryNumber * 0.038; // 2 weeks sick leave (~3.8%)
  const payrollTax = salaryNumber > 700000 ? salaryNumber * 0.045 : 0; // NSW payroll tax threshold
  const workersComp = salaryNumber * 0.015; // ~1.5% workers compensation

  const totalHiddenCosts = superannuation + annualLeave + sickLeave + payrollTax + workersComp;
  const totalLocalCost = salaryNumber + totalHiddenCosts;

  const annualOverseasCost = overseasRate.hourly * hoursNumber * 52;
  const annualSavings = totalLocalCost - annualOverseasCost;
  const savingsPercentage = totalLocalCost > 0 ? ((annualSavings / totalLocalCost) * 100).toFixed(0) : '0';

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our interactive calculator to see exactly how much you could save by hiring overseas bookkeeping professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center mb-6">
              <Calculator className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Your TRUE Employment Costs</h3>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>💡 Most businesses forget:</strong> Local employees cost 20-25% MORE than their salary due to super, leave, payroll tax, and workers comp!
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Local Bookkeeper Annual Salary
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                  <input
                    type="text"
                    value={localSalary}
                    onChange={handleSalaryChange}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg font-medium"
                    placeholder="80000"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Enter annual salary (e.g., 70000 for $70,000)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours Per Week
                </label>
                <input
                  type="text"
                  value={hoursPerWeek}
                  onChange={handleHoursChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg font-medium"
                  placeholder="40"
                />
                <p className="text-xs text-gray-500 mt-1">Typical range: 20-40 hours per week</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-red-800 mb-3">Hidden Costs You&apos;re Currently Paying:</h4>
                <div className="text-sm text-red-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Base salary:</span>
                    <span className="font-semibold">${salaryNumber.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Superannuation (11.5%):</span>
                    <span className="font-semibold">${superannuation.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual leave provision:</span>
                    <span className="font-semibold">${annualLeave.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sick leave provision:</span>
                    <span className="font-semibold">${sickLeave.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Workers compensation:</span>
                    <span className="font-semibold">${workersComp.toLocaleString()}</span>
                  </div>
                  {payrollTax > 0 && (
                    <div className="flex justify-between">
                      <span>Payroll tax:</span>
                      <span className="font-semibold">${payrollTax.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2 border-t border-red-300 font-bold">
                    <span>TOTAL TRUE COST:</span>
                    <span className="text-red-600">${totalLocalCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="font-semibold text-emerald-800">Taskible Philippines Professional</span>
                </div>
                <div className="text-sm text-emerald-700">
                  <div className="flex justify-between">
                    <span>Simple hourly rate:</span>
                    <span className="font-semibold text-emerald-600">${overseasRate.hourly}/hour</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Total annual cost:</span>
                    <span className="font-semibold text-emerald-600">${annualOverseasCost.toLocaleString()}</span>
                  </div>
                  <div className="bg-emerald-100 rounded p-2 mt-2">
                    <div className="text-xs text-emerald-800">
                      ✓ No super required<br/>
                      ✓ No annual/sick leave<br/>
                      ✓ No payroll tax<br/>
                      ✓ No workers comp<br/>
                      ✓ No hidden costs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Savings Breakdown</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-700 font-medium">True Local Employee Cost</span>
                    <div className="text-xs text-red-600">Salary + Super + Leave + Workers Comp</div>
                  </div>
                  <span className="text-2xl font-bold text-red-500">${totalLocalCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-700 font-medium">Taskible Philippines Cost</span>
                    <div className="text-xs text-emerald-600">Simple hourly rate - no hidden costs</div>
                  </div>
                  <span className="text-2xl font-bold text-emerald-500">${annualOverseasCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg p-6 text-white premium-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">Annual Savings</h4>
                    <p className="text-emerald-100">That&apos;s {savingsPercentage}% less cost!</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">${annualSavings.toLocaleString()}</div>
                    <TrendingDown className="h-6 w-6 ml-auto" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600">${Math.round(annualSavings / 12).toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">${Math.round(annualSavings / 52).toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Weekly Savings</div>
                </div>
              </div>

              {annualSavings > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                    🚀 What you could do with ${annualSavings.toLocaleString()} extra:
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>✓ Hire additional staff in sales or operations</li>
                    <li>✓ Invest in marketing to grow your business</li>
                    <li>✓ Upgrade technology and equipment</li>
                    <li>✓ Build a 6-month emergency fund</li>
                    <li>✓ Take that vacation you&apos;ve been postponing</li>
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to start saving? Book your free consultation and we&apos;ll find you the perfect Philippines professional today.
          </p>
          <motion.a
            href="https://calendly.com/team-taskible/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📅 Book Free Consultation - Start Saving Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}