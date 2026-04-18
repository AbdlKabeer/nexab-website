'use client';
import { Wrapper, Inner, Content } from './styles';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <Wrapper>
      <Inner>
        <Content>
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>PRIVACY POLICY</h1>
            <p><strong>NEXAB TECHNOLOGIES LIMITED</strong></p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <section>
              <p>
                At NEXAB TECHNOLOGIES LIMITED (&quot;NEXAB&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your 
                privacy and are committed to protecting your personal data. This Privacy Policy 
                explains how we handle your personal data when you use our Platform and outlines 
                your rights under the law.
              </p>
            </section>

            <section>
              <h2>1. INTRODUCTION</h2>
              <p>
                This Privacy Policy applies to all users of the NEXAB Platform, including landlords, 
                agents, property managers, tenants, and visitors. By using the Platform, you agree 
                to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2>2. INFORMATION WE COLLECT</h2>
              <p>We collect several types of information to provide and improve our Services:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and physical address</li>
                <li><strong>Identity Verification:</strong> Government-issued ID or BVN for screening</li>
                <li><strong>Property Data:</strong> Photos, descriptions, and location data</li>
                <li><strong>Financial Data:</strong> Payment details processed through secure third-party providers</li>
                <li><strong>Technical Data:</strong> IP address, device type, browser settings, operating system</li>
                <li><strong>Usage Data:</strong> Information on how you use the app</li>
                <li><strong>Location Data:</strong> GPS data for searches or verification</li>
              </ul>
            </section>

            <section>
              <h2>3. HOW WE USE YOUR INFORMATION</h2>
              <p>We use your data for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> Maintain the Platform and enable transactions</li>
                <li><strong>Communication:</strong> Send alerts, updates, and notifications</li>
                <li><strong>Verification:</strong> Conduct user checks and due diligence</li>
                <li><strong>Safety & Security:</strong> Prevent fraud and unauthorized access</li>
                <li><strong>Improvement:</strong> Analyze usage and improve user experience</li>
              </ul>
            </section>

            <section>
              <h2>4. SHARING YOUR INFORMATION</h2>
              <p>We may share your data in these situations:</p>
              <ul>
                <li><strong>Between Users:</strong> To enable landlord–tenant communication</li>
                <li><strong>Service Providers:</strong> With third-party partners (e.g., hosting, mapping)</li>
                <li><strong>Legal Requirements:</strong> When required by Nigerian law or regulators</li>
                <li><strong>Business Transfers:</strong> During mergers, acquisitions, or asset sales</li>
              </ul>
            </section>

            <section>
              <h2>5. DATA RETENTION</h2>
              <p>
                We retain your data only as long as necessary for the purposes outlined in this policy 
                or as required by legal, tax, or regulatory obligations.
              </p>
            </section>

            <section>
              <h2>6. YOUR RIGHTS (NDPA COMPLIANCE)</h2>
              <p>Under the Nigeria Data Protection Act (NDPA) 2024, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion (“right to be forgotten”)</li>
                <li>Request data portability</li>
                <li>Object to or restrict data processing</li>
              </ul>
            </section>

            <section>
              <h2>7. SECURITY MEASURES</h2>
              <p>
                We use industry-standard security measures such as encryption (SSL/TLS), firewalls, 
                and secure servers to protect your data.
              </p>
            </section>

            <section>
              <h2>8. COOKIES AND TRACKING</h2>
              <p>
                We use cookies and similar technologies to track activity on our Platform. 
                You can configure your browser to refuse cookies or alert you when they are used.
              </p>
            </section>

            <section>
              <h2>9. INTERNATIONAL DATA TRANSFERS</h2>
              <p>
                Your data may be transferred and stored outside Nigeria. We ensure appropriate 
                safeguards are in place in line with applicable laws.
              </p>
            </section>

            <section>
              <h2>10. CHILDREN&apos;S PRIVACY</h2>
              <p>Our Platform is not intended for individuals under 18. We do not knowingly collect data from children.</p>
            </section>

            <section>
              <h2>11. CHANGES TO THIS POLICY</h2>
              <p>
                We may update this Privacy Policy periodically. Updates will be posted on this page 
                with a revised “Last updated” date.
              </p>
            </section>

            <footer>
              <h2>12. CONTACT US</h2>
              <p><strong>NEXAB TECHNOLOGIES LIMITED</strong></p>
              <p>Email: <a href="mailto:privacy@nexab.tech" style={{ color: 'var(--brand-primary)' }}>privacy@nexab.tech</a></p>
              <p>Website: www.nexab.tech</p>
              <p><strong>Last updated:</strong> February 2026</p>
            </footer>
          </motion.div>
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default PrivacyPage;
