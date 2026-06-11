'use client';
import { Wrapper, Inner, Content } from './styles';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <Wrapper>
      <Inner>
        <Content>
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>TERMS OF USE</h1>
            <p><strong>NEXAB TECHNOLOGIES LIMITED</strong></p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <section>
              <p>
                These Terms of Use (“Terms”) govern your access to and use of the NEXAB TECHNOLOGIES LIMITED (&quot;NEXAB&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) website, mobile application, and related digital products or platforms (collectively, the “Platform”).
              </p>
              <p>
                By accessing, browsing, creating an account, listing a property, making enquiries, scheduling inspections, or using any service on the Platform (“Services”), you agree to be bound by these Terms, our Privacy Policy, and any additional policies referenced herein.
              </p>
              <p>
                If you do not agree, do not use the Platform.
              </p>
              <p>
                These Terms apply to all users, including landlords, agents, property managers, tenants, prospective tenants, and general visitors to the Platform.
              </p>
            </section>

            <section>
              <h2>1. ELIGIBILITY &amp; ACCOUNT REGISTRATION</h2>
              <p>1.1 You must be at least 18 years old and legally capable of entering binding contracts.</p>
              <p>1.2 To access certain Services, you must create an account (“Account”) and provide accurate, complete, and updated information. You are responsible for safeguarding your login details.</p>
              <p>1.3 By registering, you authorize NEXAB to:</p>
              <ul>
                <li>verify your identity;</li>
                <li>validate information provided;</li>
                <li>conduct due diligence where necessary;</li>
                <li>access third-party databases for verification purposes.</li>
              </ul>
              <p>1.4 You may not use another user’s Account without permission.</p>
              <p>1.5 You are fully responsible for all activities under your Account, whether authorised by you or not.</p>
              <p>1.6 NEXAB reserves the right to suspend or terminate your Account where:</p>
              <ul>
                <li>information provided is false or misleading;</li>
                <li>you violate these Terms;</li>
                <li>your activities present a risk to the Platform, users, or the public;</li>
                <li>required verification steps fail.</li>
              </ul>
            </section>

            <section>
              <h2>2. NEXAB PLATFORM &amp; SERVICES</h2>
              <p>2.1. NEXAB provides property technology services that enable users to:</p>
              <ul style={{ listStyleType: 'lower-alpha' }}>
                <li>list residential and commercial properties;</li>
                <li>find property listings;</li>
                <li>schedule inspections or appointments with landlords/agents;</li>
                <li>communicate with property owners or agents;</li>
                <li>make payments for applicable viewing charges, subscription fees, or related services;</li>
                <li>access tools for property management or tenant screening;</li>
                <li>connect landlords/agents with prospective tenants.</li>
              </ul>
              <p>2.2. NEXAB is not a real estate company, is not a party to rental or sale transactions, and does not guarantee:</p>
              <ul>
                <li>the availability, safety, legality, quality, or accuracy of listed properties;</li>
                <li>the conduct of landlords, tenants, or agents;</li>
                <li>the outcome of any tenancy or transaction.</li>
              </ul>
              <p>Users transact at their own risk, and NEXAB only provides a facilitating digital platform.</p>
            </section>

            <section>
              <h2>3. USER OBLIGATIONS</h2>
              <p>Users agree to:</p>
              <p>3.1. Provide truthful information and use the Platform lawfully.</p>
              <p>3.2. Not upload, list, or transmit:</p>
              <ul>
                <li>false, misleading, or fraudulent property details;</li>
                <li>duplicate or fabricated listings;</li>
                <li>offensive, harmful, or unlawful content;</li>
                <li>properties that the user is not authorised to list.</li>
              </ul>
              <p>3.3. Not engage in:</p>
              <ul>
                <li>impersonation;</li>
                <li>harassment, abuse, or harmful conduct;</li>
                <li>bypassing inspection fees or required processes;</li>
                <li>attempting to hack, mine data, or disrupt Platform operations.</li>
              </ul>
              <p>3.4. Use the Platform only for personal or authorised commercial use.</p>
            </section>

            <section>
              <h2>4. PROPERTY LISTINGS</h2>
              <p>Users who list properties (“Listing Users”) represent and warrant that:</p>
              <p>4.1. They have legal rights or authorisation to list the property.</p>
              <p>4.2. All information provided; pricing, description, pictures, location, fees is accurate and not misleading.</p>
              <p>4.3. They will update or remove listings that are no longer available.</p>
              <p>4.4. They will honour scheduled inspections and provide honest representations to prospective tenants.</p>
              <p>4.5. They will not:</p>
              <ul>
                <li>post multiple listings for the same property under different names;</li>
                <li>use stock or misleading photos;</li>
                <li>list properties not legally under their care.</li>
              </ul>
              <p>NEXAB may remove or suspend any listing that violates these Terms or applicable law.</p>
            </section>

            <section>
              <h2>5. SCHEDULING INSPECTIONS &amp; APPOINTMENTS</h2>
              <p>5.1. The Platform enables users to schedule inspections with Listing Users.</p>
              <p>5.2. NEXAB does not guarantee:</p>
              <ul>
                <li>punctuality of the landlord/agent;</li>
                <li>property access;</li>
                <li>the condition or accuracy of the property.</li>
              </ul>
              <p>5.3. Any inspection fees paid are non-refundable, except where NEXAB expressly states otherwise.</p>
              <p>5.4. Users must attend scheduled inspections on time or risk forfeiting fees.</p>
            </section>

            <section>
              <h2>6. FEES &amp; PAYMENTS</h2>
              <p>6.1. Certain Services may require payment (e.g., listing fees, inspection charges, premium access, or platform subscriptions).</p>
              <p>6.2. Payments may be processed through third-party payment providers. By using these Services, you consent to their terms.</p>
              <p>6.3. NEXAB is not responsible for processing delays, failed transactions, chargebacks, or bank-related issues.</p>
              <p>6.4. Fees paid are generally non-refundable, except where required by law or expressly stated by NEXAB.</p>
            </section>

            <section>
              <h2>7. USER CONTENT &amp; LICENSING</h2>
              <p>7.1. Any content you upload (“User Content”), including photographs, descriptions, messages, and reviews, remains your property.</p>
              <p>7.2. You grant NEXAB a worldwide, royalty-free, non-exclusive, sublicensable licence to use, reproduce, display, distribute, and adapt your User Content for the purpose of providing and improving the Services.</p>
              <p>7.3. You warrant that:</p>
              <ul>
                <li>you own or have rights to all content submitted;</li>
                <li>your content does not infringe any third-party rights.</li>
              </ul>
              <p>7.4. NEXAB may remove any User Content that violates these Terms.</p>
            </section>

            <section>
              <h2>8. THIRD-PARTY SERVICES</h2>
              <p>8.1. The Platform may integrate with third-party services (e.g., payment processors, identity verification providers, mapping services).</p>
              <p>8.2. NEXAB is not responsible for:</p>
              <ul>
                <li>availability of third-party services;</li>
                <li>content, accuracy, or performance;</li>
                <li>damages arising from their use.</li>
              </ul>
              <p>8.3. Your use of third-party services is subject to their separate terms.</p>
            </section>

            <section>
              <h2>9. PRIVACY &amp; DATA PROTECTION</h2>
              <p>Your use of the Platform is governed by our Privacy Policy, which forms an integral part of these Terms.</p>
              <p>NEXAB collects and processes data in compliance with the Nigeria Data Protection Act (NDPA) 2024 and applicable regulations.</p>
            </section>

            <section>
              <h2>10. INTELLECTUAL PROPERTY</h2>
              <p>10.1. Except as expressly stated in these Terms, all intellectual property rights in and to the Website, the Services, and all associated content (including software, algorithms, and database structures, graphics, logos, and trade marks) are owned or licensed by us. All rights are reserved.</p>
              <p>10.2. Our names, logos, and trade marks (whether registered or unregistered) (“Company Marks”) are our property. You may not use the Company Marks without our prior written permission. Any unauthorized use may constitute infringement.</p>
              <p>10.3. Third-party trade marks and service marks displayed through the Services are the property of their respective owners. Their presence does not imply endorsement or affiliation, and we cannot grant you rights to use them.</p>
              <p>10.4. You may not use, modify, resell, commercialize or register any business name, trade mark, domain name, social media handle, advertising keyword, or other identifier that incorporates or is confusingly similar to the Company Marks. Variations, misspellings, or phonetic equivalents will also be considered confusing.</p>
              <p>10.5. Nothing in these Terms grants you any rights in our patents or other intellectual property except as expressly provided.</p>
            </section>

            <section>
              <h2>11. PROHIBITED CONDUCT</h2>
              <p>You agree not to:</p>
              <ul style={{ listStyleType: 'lower-alpha' }}>
                <li>use the Platform for fraud, scams, or misleading conduct;</li>
                <li>post unauthorized or fake property listings;</li>
                <li>scrape, crawl, or collect data without permission;</li>
                <li>upload malware or harmful code;</li>
                <li>circumvent inspection or listing requirements;</li>
                <li>impersonate any person or entity.</li>
              </ul>
            </section>

            <section>
              <h2>12. REPRESENTATIONS &amp; WARRANTIES</h2>
              <p>12.1. You represent that:</p>
              <ul style={{ listStyleType: 'lower-alpha' }}>
                <li>you have the authority to enter into these Terms;</li>
                <li>you will comply with all Nigerian laws relating to property rentals, agency, disclosure, and fair dealing;</li>
                <li>your use of the Platform will not harm or defraud others.</li>
              </ul>
              <p>12.2. To the maximum extent allowed by law:</p>
              <ul>
                <li>The Platform is provided “as is” and “as available.”</li>
                <li>NEXAB makes no guarantees about:
                  <ul>
                    <li>property accuracy or availability;</li>
                    <li>reliability of landlords, tenants, or agents;</li>
                    <li>uninterrupted or error-free service.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2>13. LIABILITY &amp; INDEMNITY</h2>
              <p>13.1. NEXAB is not liable for:</p>
              <ul>
                <li>property defects, inaccuracies, or misrepresentations;</li>
                <li>any loss arising from rental or sale transactions;</li>
                <li>actions of landlords, tenants, or agents;</li>
                <li>missed inspections or scheduling issues;</li>
                <li>indirect, consequential, punitive, or special damages.</li>
              </ul>
              <p>13.2. Our total liability to any user shall not exceed ₦50,000 or the amount paid for the relevant service, whichever is lower.</p>
              <p>13.3. You agree to indemnify and hold NEXAB harmless from any claims, losses, liabilities, and expenses arising from:</p>
              <ul>
                <li>your misuse of the Platform;</li>
                <li>your interactions with other users;</li>
                <li>content you upload;</li>
                <li>violation of these Terms or any law.</li>
              </ul>
            </section>

            <section>
              <h2>14. TERM &amp; TERMINATION</h2>
              <p>14.1. These Terms apply as long as you use the Platform.</p>
              <p>14.2. NEXAB may suspend or terminate your Account for breach, fraud, non-compliance, or at its discretion.</p>
              <p>14.3. You may close your Account at any time.</p>
            </section>

            <section>
              <h2>15. GOVERNING LAW, JURISDICTION &amp; DISPUTE RESOLUTION</h2>
              <p>15.1. These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
              <p>15.2. Any dispute or controversy arising out of or in connection with this Agreement, including its interpretation, application, or performance (whether contractual or non-contractual), shall first be referred to the authorized representatives of the Parties for amicable resolution.</p>
              <p>15.3. If the dispute is not resolved within ten (10) business days of the commencement of such discussions, the Parties shall submit the matter to mediation, with the seat of mediation in Lagos State in line with the Arbitration and Mediation Act 2023. Nothing in this Agreement shall preclude either Party from seeking recourse to a court of competent jurisdiction where necessary.</p>
            </section>

            <section>
              <h2>16. MISCELLANEOUS</h2>
              <p>16.1. These Terms, together with any referenced documents, constitute the complete agreement between you and NEXAB, superseding all prior discussions or agreements.</p>
              <p>16.2. NEXAB may update these Terms, and our related policies or guidelines, from time to time. Where a change materially affects your rights or use of the Services, we will provide reasonable notice (e.g., by email, notice on the merchant dashboard, or other suitable means). Continued use constitutes acceptance.</p>
              <p>16.3. NEXAB may assign or transfer its rights and obligations under these Terms. You may not assign or transfer your rights or obligations without our prior written consent.</p>
              <p>16.4. Each provision of these Terms is separate and enforceable. If any provision is found to be unlawful or unenforceable, that provision will be deemed modified or removed to the extent necessary, and the remainder of the Terms will continue in full force and effect.</p>
              <p>16.5. All notices must be in writing and delivered either (a) by hand or courier, deemed received upon delivery, or (b) by electronic transmission, deemed received upon successful transmission and acknowledgment.</p>
              <p>16.6. NEXAB is not responsible for delays or failures caused by events beyond our reasonable control, including natural disasters, war, government action, strikes, or network failures. &quot;Force Majeure Events&quot; include acts of God or public enemy, acts of federal, state or local government, earthquake, flood, hurricane, fire, epidemic, pandemic, freight embargoes, war or any other event beyond our reasonable control.</p>
            </section>

            <footer>
              <h2>17. CONTACT INFORMATION</h2>
              <p><strong>NEXAB TECHNOLOGIES LIMITED</strong></p>
              <p>Email: <a href="mailto:hi@nexab.com">hi@nexab.com</a></p>
              <p>Address: </p>
              <p>Phone number: </p>
              <p>Website: <a href="https://www.nexab.com">www.nexab.com</a></p>
              <p>Last updated on: November 2025</p>
            </footer>
          </motion.div>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default TermsPage;
