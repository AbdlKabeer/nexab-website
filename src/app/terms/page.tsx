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
                These Terms of Use (“Terms”) govern your access to and use of the NEXAB TECHNOLOGIES LIMITED 
                (&quot;NEXAB&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) website, mobile application, and related digital 
                products or platforms (collectively, the “Platform”).
              </p>
              <p>
                By accessing, browsing, creating an account, listing a property, making enquiries, 
                scheduling inspections, or using any service on the Platform (“Services”), you agree 
                to be bound by these Terms, our Privacy Policy, and any additional policies referenced herein.
              </p>
              <p><strong>If you do not agree, do not use the Platform.</strong></p>
              <p>
                These Terms apply to all users, including landlords, agents, property managers, tenants, 
                prospective tenants, and general visitors to the Platform.
              </p>
            </section>

            <section>
              <h2>1. ELIGIBILITY & ACCOUNT REGISTRATION</h2>
              <p>1.1 You must be at least 18 years old and legally capable of entering binding contracts.</p>
              <p>1.2 To access certain Services, you must create an account (“Account”) and provide accurate, complete, and updated information. You are responsible for safeguarding your login details.</p>
              <p>1.3 By registering, you authorize NEXAB to:</p>
              <ul>
                <li>verify your identity</li>
                <li>validate information provided</li>
                <li>conduct due diligence where necessary</li>
                <li>access third-party databases for verification purposes</li>
              </ul>
              <p>1.4 You may not use another user’s Account without permission.</p>
              <p>1.5 You are fully responsible for all activities under your Account.</p>
              <p>1.6 NEXAB may suspend or terminate your Account if information is false or misleading, you violate these Terms, your activities pose risk, or verification fails.</p>
            </section>

            <section>
              <h2>2. NEXAB PLATFORM & SERVICES</h2>
              <p>2.1 NEXAB provides property technology services that enable users to list properties, find listings, schedule inspections, communicate with landlords/agents, make payments, and access management tools.</p>
              <p>2.2 NEXAB is not a real estate company and does not guarantee property accuracy or availability, user conduct, or transaction outcomes. Users transact at their own risk.</p>
            </section>

            <section>
              <h2>3. USER OBLIGATIONS</h2>
              <p>3.1 Provide truthful information and use the Platform lawfully.</p>
              <p>3.2 Not upload false, fraudulent, duplicate, harmful, or unauthorized properties.</p>
              <p>3.3 Not engage in impersonation, harassment, bypassing fees, or hacking.</p>
              <p>3.4 Use the Platform only for authorised purposes.</p>
            </section>

            <section>
              <h2>4. PROPERTY LISTINGS</h2>
              <p>4.1 Have legal rights to list the property.</p>
              <p>4.2 Provide accurate details.</p>
              <p>4.3 Update or remove unavailable listings.</p>
              <p>4.4 Honour inspections.</p>
              <p>4.5 Not duplicate listings or use misleading photos. NEXAB may remove violating listings.</p>
            </section>

            <section>
              <h2>5. SCHEDULING INSPECTIONS</h2>
              <p>5.1 Users can schedule inspections.</p>
              <p>5.2 NEXAB does not guarantee punctuality, access, or accuracy.</p>
              <p>5.3 Fees are non-refundable unless stated.</p>
              <p>5.4 Users must attend on time.</p>
            </section>

            <section>
              <h2>6. FEES & PAYMENTS</h2>
              <p>6.1 Some services require payment.</p>
              <p>6.2 Payments may use third-party providers.</p>
              <p>6.3 NEXAB is not responsible for payment issues.</p>
              <p>6.4 Fees are generally non-refundable.</p>
            </section>

            <section>
              <h2>7. USER CONTENT & LICENSING</h2>
              <p>7.1 You own your content.</p>
              <p>7.2 You grant NEXAB a licence to use it.</p>
              <p>7.3 You confirm you own the content and it doesn’t infringe rights.</p>
            </section>

            <section>
              <h2>8. THIRD-PARTY SERVICES</h2>
              <p>8.1 Platform may use third-party services.</p>
              <p>8.2 NEXAB is not responsible for availability, accuracy, or damages.</p>
            </section>

            <section>
              <h2>9. PRIVACY & DATA PROTECTION</h2>
              <p>Use of the Platform is governed by our Privacy Policy. NEXAB complies with the Nigeria Data Protection Act (NDPA) 2024.</p>
            </section>

            <section>
              <h2>10. INTELLECTUAL PROPERTY</h2>
              <p>10.1 All platform content is owned or licensed by NEXAB.</p>
              <p>10.2 Company marks cannot be used without permission.</p>
              <p>10.4 You cannot copy or imitate company branding.</p>
            </section>

            <section>
              <h2>11. PROHIBITED CONDUCT</h2>
              <p>You must not commit fraud, post fake listings, scrape data, upload malware, or impersonate others.</p>
            </section>

            <section>
              <h2>12. REPRESENTATIONS & WARRANTIES</h2>
              <p>12.1 You confirm you can enter this agreement and follow Nigerian laws.</p>
              <p>12.2 Platform is provided “as is” with no guarantees.</p>
            </section>

            <section>
              <h2>13. LIABILITY & INDEMNITY</h2>
              <p>13.1 NEXAB is not liable for property issues, transaction losses, user actions, or indirect damages.</p>
              <p>13.2 Liability capped at ₦50,000 or service fee.</p>
              <p>13.3 You agree to indemnify NEXAB.</p>
            </section>

            <section>
              <h2>14. TERM & TERMINATION</h2>
              <p>14.1 Terms apply while using the Platform.</p>
              <p>14.2 NEXAB may suspend accounts. Users can close accounts anytime.</p>
            </section>

            <section>
              <h2>15. GOVERNING LAW & DISPUTES</h2>
              <p>15.1 Governed by Nigerian law.</p>
              <p>15.2 Disputes first resolved amicably, then mediation in Lagos.</p>
            </section>

            <section>
              <h2>16. MISCELLANEOUS</h2>
              <p>Complete agreement. Terms may be updated. Force majeure applies.</p>
            </section>

            <footer>
              <h2>17. CONTACT INFORMATION</h2>
              <p><strong>NEXAB TECHNOLOGIES LIMITED</strong></p>
              <p>Email: hi@nexab.com</p>
              <p>Website: www.nexab.com</p>
              <p>Last updated: November 2025</p>
            </footer>
          </motion.div>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default TermsPage;
