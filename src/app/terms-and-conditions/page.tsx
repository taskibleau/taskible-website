import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Taskible',
  description: 'Taskible Terms & Conditions - Legal terms for using our bookkeeping consultation and connection services.',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms &amp; Conditions</h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-500">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-AU')}
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. About These Terms</h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the Taskible website and services provided by
                Taskible Pty Ltd (ABN: 42 156 942 886) (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, &quot;Taskible&quot;). By using our website or services,
                you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Our Services</h2>
              <p>Taskible provides:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Consultation services to help Australian businesses reduce bookkeeping costs</li>
                <li>Connection services to qualified Philippines-based bookkeeping professionals</li>
                <li>Cost analysis and savings calculations</li>
                <li>Ongoing support and management of overseas professional relationships</li>
                <li>Educational resources about offshore bookkeeping solutions</li>
              </ul>
              <p>
                <strong>Important:</strong> We are a consultation and connection service. We do not directly provide bookkeeping
                services ourselves but connect you with qualified independent professionals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Eligibility and Use</h2>
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Be at least 18 years old or represent a business entity</li>
                <li>Have legal authority to enter into these Terms</li>
                <li>Operate a legitimate business requiring bookkeeping services</li>
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable Australian laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Your Obligations</h2>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate business and financial information</li>
                <li>Participate honestly in consultation sessions</li>
                <li>Treat connected professionals with respect and professionalism</li>
                <li>Comply with employment laws when engaging overseas professionals</li>
                <li>Maintain confidentiality of any proprietary information shared</li>
                <li>Not use our services for illegal or unethical purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Our Obligations and Limitations</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">What We Provide</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Professional consultation on bookkeeping cost reduction</li>
                <li>Introduction to vetted Philippines-based professionals</li>
                <li>Ongoing support during the initial engagement period</li>
                <li>Cost analysis tools and calculations</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">What We Don&apos;t Guarantee</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Specific cost savings amounts (estimates are indicative only)</li>
                <li>The performance or conduct of connected professionals</li>
                <li>Compliance with your specific industry regulations</li>
                <li>Availability of professionals at all times</li>
                <li>That overseas arrangements will suit every business</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Fees and Payment Terms</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Consultation Fees</h3>
              <p>
                Initial consultations are provided free of charge. Ongoing service fees will be clearly communicated
                before any payment is required.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">90-Day Money-Back Guarantee</h3>
              <p>
                We offer a 90-day money-back guarantee for our paid services. If you&apos;re not completely satisfied with
                the professional we connect you with, we will provide a full refund of fees paid to Taskible within
                90 days of service commencement.
              </p>
              <p><strong>Guarantee Conditions:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request must be made within 90 days of service start</li>
                <li>You must have given the professional a reasonable opportunity to perform</li>
                <li>Refund applies to Taskible fees only, not payments to professionals</li>
                <li>Refund requests must include specific reasons for dissatisfaction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Professional Relationships</h2>
              <p>
                When we connect you with a Philippines-based professional, you enter into a direct relationship with them.
                Taskible is not a party to that working relationship. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Managing the day-to-day working relationship</li>
                <li>Setting expectations and deadlines</li>
                <li>Ensuring compliance with Australian tax and employment laws</li>
                <li>Payment arrangements with the professional</li>
                <li>Quality control and work review</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and software, is owned by Taskible and
                protected by Australian and international copyright laws. You may not reproduce, distribute, or create
                derivative works without our written permission.
              </p>
              <p>
                Our cost calculation tools and methodologies are proprietary. You may use them for your business
                evaluation but not for commercial redistribution.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by Australian law, Taskible&apos;s liability is limited to the amount of fees
                you have paid to us. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Actions or omissions of connected professionals</li>
                <li>Business losses, lost profits, or consequential damages</li>
                <li>Tax, legal, or compliance issues arising from overseas arrangements</li>
                <li>Data breaches or security issues from connected professionals</li>
                <li>Any damages exceeding the fees paid to Taskible</li>
              </ul>
              <p>
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantees or rights you may have
                under the Australian Consumer Law that cannot be excluded.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Privacy and Confidentiality</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy for information about how we collect,
                use, and protect your personal information. We maintain strict confidentiality regarding your business
                information and will not share it without your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <p>
                Either party may terminate our service relationship at any time with reasonable notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You remain responsible for any outstanding fees</li>
                <li>We will provide reasonable assistance with transition</li>
                <li>Your direct relationship with connected professionals continues independently</li>
                <li>Confidentiality obligations survive termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Dispute Resolution</h2>
              <p>
                If you have a dispute with us, we encourage you to first contact us directly at team@taskible.com.au
                to resolve the matter amicably. If this is unsuccessful:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Disputes will be governed by Queensland, Australia law</li>
                <li>Courts of Queensland have exclusive jurisdiction</li>
                <li>We prefer mediation before litigation where possible</li>
                <li>Australian Consumer Law remedies remain available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Material changes will be communicated via email or website
                notice. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">14. General Provisions</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>These Terms constitute the entire agreement between us</li>
                <li>If any provision is unenforceable, the remainder remains in effect</li>
                <li>We may assign these Terms; you may not without our consent</li>
                <li>No waiver of any term is effective unless in writing</li>
                <li>These Terms are governed by Queensland, Australia law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
              <p>
                If you have questions about these Terms &amp; Conditions, please contact us:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p><strong>Taskible Pty Ltd</strong></p>
                <p>Email: team@taskible.com.au</p>
                <p>Address: Brisbane, Queensland, Australia</p>
                <p>ABN: 42 156 942 886</p>
              </div>
            </section>

            <section className="border-t pt-6">
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> These Terms &amp; Conditions are for general guidance only and do not constitute
                legal advice. We recommend consulting with a qualified lawyer for specific legal matters affecting your business.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}