import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Taskible',
  description: 'Taskible Privacy Policy - How we collect, use, and protect your personal information in compliance with Australian Privacy Act 1988.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-AU')}
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. About This Policy</h2>
              <p>
                Taskible Pty Ltd (ABN: 42 156 942 886) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and protect your personal information in accordance with the
                Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h3>
              <p>We may collect the following personal information from you:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact details (email address, phone number)</li>
                <li>Business information (company name, industry, location)</li>
                <li>Financial information (current bookkeeping costs, business size)</li>
                <li>Communication preferences and consultation notes</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">Technical Information</h3>
              <p>We automatically collect technical information including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and browser information</li>
                <li>Website usage data via Google Analytics</li>
                <li>Cookies and tracking technologies</li>
                <li>Device and operating system information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Collect Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Direct collection:</strong> When you contact us, use our calculator, or book consultations</li>
                <li><strong>Calendly:</strong> When you schedule appointments through our booking system</li>
                <li><strong>Google Analytics:</strong> Automatically when you visit our website</li>
                <li><strong>Email communication:</strong> When you contact team@taskible.com.au</li>
                <li><strong>Phone consultations:</strong> During our consultation calls</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide consultation services and bookkeeping solutions</li>
                <li>Connect you with qualified Philippines-based professionals</li>
                <li>Calculate potential cost savings for your business</li>
                <li>Communicate about our services and respond to inquiries</li>
                <li>Improve our website and services through analytics</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Process payments and manage our business relationship</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Philippines professionals:</strong> Qualified bookkeepers we recommend for your business</li>
                <li><strong>Service providers:</strong> Google Analytics, Calendly, and other operational tools</li>
                <li><strong>Legal requirements:</strong> When required by Australian law or court orders</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              </ul>
              <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Security and Storage</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. Your information is stored on secure servers
                and transmitted using industry-standard encryption.
              </p>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p>Under Australian privacy law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              <p>
                Our website uses cookies and similar technologies to improve your browsing experience and analyze website traffic.
                We use Google Analytics to understand how visitors interact with our site. You can control cookies through your
                browser settings, though this may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
              <p>Our website integrates with third-party services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Google Analytics:</strong> Web analytics (Google Privacy Policy applies)</li>
                <li><strong>Calendly:</strong> Appointment scheduling (Calendly Privacy Policy applies)</li>
                <li><strong>Vercel:</strong> Website hosting (Vercel Privacy Policy applies)</li>
              </ul>
              <p>These services have their own privacy policies and terms of use.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p>
                As part of our service connecting Australian businesses with Philippines professionals, some personal
                information may be transferred to the Philippines. We ensure appropriate safeguards are in place to
                protect your information during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy on our website and updating the &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p><strong>Taskible Pty Ltd</strong></p>
                <p>Email: team@taskible.com.au</p>
                <p>Address: Brisbane, Queensland, Australia</p>
                <p>ABN: 42 156 942 886</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}