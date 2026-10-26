import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}

function LegalLayout({ title, children }) {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <p className="text-gray-400 font-text uppercase tracking-widest text-xs mb-3">Legal</p>
      <h1 className="text-3xl md:text-4xl font-light font-display text-white tracking-tight">{title}</h1>
      <p className="mt-3 text-gray-400 font-text text-sm">
        Effective Date: October 26, 2026
        <span className="mx-2 text-gray-600">·</span>
        Last Updated: October 26, 2026
      </p>
      <div className="mt-10 space-y-10 text-gray-300 font-text text-base leading-relaxed">{children}</div>
      <p className="mt-12 text-sm text-gray-500 font-text">
        Also see{" "}
        <Link to="/privacy" className="text-white hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms" className="text-white hover:underline">
          Terms and Conditions
        </Link>
        .
      </p>
    </motion.div>
  );
}

function H({ children }) {
  return <h2 className="text-xl md:text-2xl font-light font-display text-white tracking-tight mb-4">{children}</h2>;
}

function H3({ children }) {
  return <h3 className="text-lg font-medium font-text text-white mt-6 mb-3">{children}</h3>;
}

function P({ children }) {
  return <p className="mb-4 last:mb-0">{children}</p>;
}

function Ul({ children }) {
  return <ul className="list-disc pl-5 space-y-2 mb-4">{children}</ul>;
}

function ContactBlock() {
  return (
    <>
      <P>
        <strong className="text-white">Voxon Consulting Pvt. Ltd. (ADVOK)</strong>
        <br />
        Address: [Insert registered business address]
        <br />
        Email:{" "}
        <a className="text-white hover:underline" href="mailto:voxonconsultingbl@gmail.com">
          voxonconsultingbl@gmail.com
        </a>
        <br />
        Phone:{" "}
        <a className="text-white hover:underline" href="tel:7700975722">
          7700975722
        </a>
      </P>
    </>
  );
}

export function TermsPage() {
  usePageTitle("Terms and Conditions — ADVOK");
  return (
    <LegalLayout title="ADVOK Terms and Conditions">
      <section>
        <P>
          These Terms and Conditions (“Terms”) govern your access to and use of the ADVOK mobile application and website
          (collectively, the “Service”), operated by Voxon Consulting Pvt. Ltd., doing business as ADVOK (“ADVOK,” “we,”
          “us,” or “our”).
        </P>
        <P>
          By creating an account, accessing, or using the Service, you agree to these Terms. If you do not agree, you must
          not use the Service.
        </P>
      </section>

      <section>
        <H>1. About ADVOK</H>
        <P>
          ADVOK is a technology platform designed to help users discover and book consultations with independent attorneys
          and law firms and provide law students with educational resources. The Service may also include AI-powered tools
          that provide general legal information.
        </P>
        <P>
          ADVOK is not a law firm, does not practice law, and does not provide legal advice or legal representation.
          Information provided through the Service, including AI-generated responses, is for general informational and
          educational purposes only.
        </P>
        <P>
          Attorneys and law firms using ADVOK are independent professionals and are not employees or agents of ADVOK solely
          because they use the platform. Any attorney-client relationship is established directly between the user and the
          attorney, subject to their separate agreement and applicable law.
        </P>
        <P>
          ADVOK does not guarantee any particular legal outcome, the availability of an attorney, or the accuracy or
          completeness of information supplied by attorneys or third parties.
        </P>
      </section>

      <section>
        <H>2. Eligibility and Accounts</H>
        <P>You must be at least 18 years old to create an account or use the Service.</P>
        <P>
          You may register using a phone number verified through a one-time passcode, Google Sign-In, Apple Sign-In, or
          other methods we make available.
        </P>
        <P>You agree to:</P>
        <Ul>
          <li>Provide accurate, current, and complete information.</li>
          <li>Keep your login credentials and account secure.</li>
          <li>Notify us if you suspect unauthorized access to your account.</li>
          <li>Update your information when it changes.</li>
          <li>Use the Service only for lawful purposes.</li>
        </Ul>
        <P>
          Attorneys and law firms must provide accurate professional credentials, bar registration or licensing
          information, practice areas, fees, and other requested details. ADVOK may request supporting documentation and
          verify professional credentials where appropriate. We may reject, restrict, suspend, or remove an account if
          credentials cannot be verified or information appears inaccurate or misleading.
        </P>
        <P>
          Account registration does not guarantee that an attorney or law firm will be listed, approved, or continuously
          available on the platform.
        </P>
      </section>

      <section>
        <H>3. Consultations and Bookings</H>
        <P>ADVOK allows users to request consultations with independent attorneys.</P>
        <P>
          A booking request is subject to the attorney&apos;s acceptance and availability. A consultation is considered
          accepted when the platform records the attorney&apos;s acceptance and communicates the confirmation to the user.
        </P>
        <P>
          Users are responsible for providing accurate information relevant to their booking and attending consultations
          at the agreed time. Attorneys are responsible for the professional services they independently provide, including
          determining whether they can accept a matter and whether any conflict of interest exists.
        </P>
        <P>
          Unless expressly stated otherwise, ADVOK does not guarantee that a consultation will result in legal
          representation, a particular legal opinion, or a favorable outcome.
        </P>
        <P>
          Any ongoing legal representation, additional work, or fees beyond the booked consultation must be agreed upon
          separately between the user and the attorney.
        </P>
      </section>

      <section>
        <H>4. Fees, Payments, Cancellations, and Refunds</H>
        <H3>4.1 Fees and payment processing</H3>
        <P>
          The amount displayed at checkout will identify the applicable consultation fee, platform fee, and taxes, where
          applicable.
        </P>
        <P>
          Payments are processed by Stripe or another payment provider we may designate. ADVOK does not intend to store
          full payment card numbers on its own systems. Payment information is handled in accordance with the applicable
          payment provider&apos;s terms and privacy practices.
        </P>
        <P>
          You authorize the applicable payment provider to process the payment you initiate. You are responsible for
          reviewing the total price before completing a transaction.
        </P>
        <H3>4.2 Cancellation and refund policy</H3>
        <P>Subject to applicable law and any additional terms expressly displayed at checkout, the following policy applies:</P>
        <Ul>
          <li>
            <strong className="text-white">Attorney declines the request:</strong> A full refund will be issued.
          </li>
          <li>
            <strong className="text-white">Attorney does not accept the request before the scheduled consultation time:</strong>{" "}
            A full refund will be issued.
          </li>
          <li>
            <strong className="text-white">Cancellation before attorney acceptance:</strong> A full refund will be issued.
          </li>
          <li>
            <strong className="text-white">Cancellation after attorney acceptance:</strong> A full refund will be issued if the
            user cancels at least 24 hours before the scheduled consultation.
          </li>
          <li>
            <strong className="text-white">Cancellation less than 24 hours before the consultation:</strong> The payment is
            non-refundable, except where required by applicable law or where ADVOK determines that a refund is
            appropriate.
          </li>
        </Ul>
        <P>
          Refunds will be returned to the original payment method where possible. Processing times depend on the payment
          provider and the user&apos;s financial institution. Refunds typically appear within 5–10 business days after
          processing, although delays may occur.
        </P>
        <P>
          If an attorney fails to attend, a technical issue prevents the consultation, or another exceptional circumstance
          occurs, please contact us so that we can review the matter.
        </P>
        <P>
          For payment questions, contact{" "}
          <a className="text-white hover:underline" href="mailto:voxonconsultingbl@gmail.com">
            voxonconsultingbl@gmail.com
          </a>
          .
        </P>
      </section>

      <section>
        <H>5. SMS, OTP, and Electronic Communications</H>
        <P>If you provide your phone number and consent to receive text messages, ADVOK may send you:</P>
        <Ul>
          <li>One-time passcodes (OTPs) for authentication and account security.</li>
          <li>Booking notifications, including acceptance or status updates.</li>
          <li>
            Consultation-related information, which may include the attorney&apos;s name, appointment time, and contact
            details.
          </li>
        </Ul>
        <P>Message frequency varies according to your use of the Service. Message and data rates may apply.</P>
        <P>
          You may opt out of non-essential text messages by replying <strong className="text-white">STOP</strong> where
          supported. Reply <strong className="text-white">HELP</strong> for assistance where supported, or contact us at{" "}
          <a className="text-white hover:underline" href="mailto:voxonconsultingbl@gmail.com">
            voxonconsultingbl@gmail.com
          </a>
          . Opting out of certain messages may affect your ability to receive OTPs or essential account and booking
          notifications.
        </P>
        <P>
          Consent to receive marketing text messages, if offered, is not a condition of purchasing a consultation or using
          the Service. ADVOK will obtain any consent required by applicable law before sending messages that require it.
        </P>
        <P>Mobile carriers are not responsible for delayed or undelivered messages.</P>
        <P>
          You may also receive electronic communications relating to your account, transactions, security, and use of the
          Service. Where permitted by law, these communications may satisfy applicable requirements for written notices.
        </P>
      </section>

      <section>
        <H>6. ADVOK AI and Legal Information</H>
        <P>
          ADVOK may provide AI-powered features that generate general legal information, explanations, summaries, or
          educational content.
        </P>
        <P>AI-generated content:</P>
        <Ul>
          <li>Is not legal advice and does not establish an attorney-client relationship.</li>
          <li>May be incomplete, outdated, inaccurate, or unsuitable for your circumstances.</li>
          <li>May not reflect the law of the state or jurisdiction relevant to your matter.</li>
          <li>Must not be relied upon as a substitute for advice from a qualified attorney.</li>
        </Ul>
        <P>
          You are responsible for independently verifying important information before acting on it. For advice concerning
          a specific legal matter, consult a licensed attorney in the relevant jurisdiction.
        </P>
        <P>
          Do not submit sensitive personal information, confidential client information, privileged communications,
          financial account details, or other confidential material to AI features unless the applicable feature expressly
          supports that use and you understand the relevant privacy and confidentiality terms.
        </P>
      </section>

      <section>
        <H>7. Acceptable Use</H>
        <P>You agree not to:</P>
        <Ul>
          <li>Use the Service to violate any applicable law or regulation.</li>
          <li>Harass, threaten, defraud, or impersonate attorneys, students, or other users.</li>
          <li>Submit false, misleading, or fraudulent information.</li>
          <li>Upload malware, malicious code, or unlawful content.</li>
          <li>Attempt unauthorized access to another user&apos;s account, ADVOK&apos;s systems, or connected services.</li>
          <li>Interfere with the security, operation, or availability of the Service.</li>
          <li>
            Scrape, copy, reverse engineer, or misuse the Service except where applicable law permits such activity.
          </li>
          <li>Use the Service to infringe another person&apos;s intellectual property, privacy, or other legal rights.</li>
        </Ul>
        <P>
          We may investigate suspected violations and take appropriate action, including removing content, restricting
          access, suspending an account, or terminating an account.
        </P>
      </section>

      <section>
        <H>8. User Content and Intellectual Property</H>
        <P>
          You retain ownership of documents, messages, and other materials you submit to ADVOK (“User Content”), subject
          to any rights you have already granted to others.
        </P>
        <P>
          You grant ADVOK a limited, non-exclusive license to host, store, process, display, and transmit your User
          Content as reasonably necessary to operate the Service, provide requested features, facilitate consultations,
          maintain security, and comply with legal obligations.
        </P>
        <P>
          This license is limited to the purposes described above and does not transfer ownership of your content to
          ADVOK.
        </P>
        <P>
          You represent that you have the rights and permissions necessary to upload and share your User Content and that
          doing so does not violate applicable law or another person&apos;s rights.
        </P>
        <P>
          The Service, including its software, branding, design, and original materials, is owned by or licensed to ADVOK
          and is protected by applicable intellectual property laws. Except as permitted by law or expressly authorized by
          us, you may not reproduce or commercially exploit those materials.
        </P>
      </section>

      <section>
        <H>9. Third-Party Services</H>
        <P>
          The Service may rely on third-party providers for payment processing, authentication, hosting, messaging,
          notifications, AI functionality, or other features.
        </P>
        <P>
          Third-party services are subject to their own terms and privacy policies. ADVOK is not responsible for the
          independent acts, policies, or availability of third-party services, except to the extent liability cannot be
          excluded under applicable law.
        </P>
      </section>

      <section>
        <H>10. Account Suspension and Termination</H>
        <P>
          You may stop using the Service at any time and request account deletion through the app, where available, or by
          contacting us.
        </P>
        <P>
          We may suspend, restrict, or terminate your access if you violate these Terms, create a security or legal risk,
          provide materially false information, misuse the Service, or if we are otherwise required or permitted to do so
          by law.
        </P>
        <P>Where appropriate and legally permitted, we may provide notice and an opportunity to address the issue.</P>
        <P>
          Account termination does not automatically eliminate outstanding payment obligations or affect provisions that by
          their nature should continue, including intellectual property, disclaimers, limitation of liability, and
          dispute-related provisions.
        </P>
        <P>Personal information will be handled in accordance with our Privacy Policy and applicable law.</P>
      </section>

      <section>
        <H>11. Disclaimers</H>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE”
          BASIS.
        </P>
        <P>
          ADVOK DISCLAIMS WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE IN EVERY CIRCUMSTANCE, OR
          SUITABLE FOR EVERY USER&apos;S NEEDS.
        </P>
        <P>
          ADVOK DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF AI-GENERATED CONTENT, USER-SUBMITTED MATERIALS, OR
          INFORMATION PROVIDED BY INDEPENDENT ATTORNEYS.
        </P>
        <P>
          ADVOK IS NOT RESPONSIBLE FOR THE INDEPENDENT LEGAL ADVICE, PROFESSIONAL SERVICES, ACTS, OR OMISSIONS OF
          ATTORNEYS USING THE PLATFORM. Nothing in these Terms excludes a responsibility that applicable law does not
          allow us to exclude.
        </P>
      </section>

      <section>
        <H>12. Limitation of Liability</H>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ADVOK WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST DATA, OR LOSS OF GOODWILL ARISING FROM
          OR RELATED TO YOUR USE OF THE SERVICE.
        </P>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ADVOK&apos;S TOTAL AGGREGATE LIABILITY FOR CLAIMS ARISING OUT
          OF OR RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE TOTAL AMOUNT YOU PAID DIRECTLY TO ADVOK FOR THE
          SERVICE DURING THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.
        </P>
        <P>
          If you have not paid ADVOK during that period, the applicable legal limit will be determined subject to
          applicable law.
        </P>
        <P>
          These limitations do not apply where prohibited by law, including where liability cannot lawfully be limited or
          excluded.
        </P>
      </section>

      <section>
        <H>13. Indemnification</H>
        <P>
          To the extent permitted by applicable law, you agree to be responsible for losses, liabilities, and reasonable
          costs arising from your unlawful use of the Service, your material violation of these Terms, or your
          infringement of another person&apos;s rights.
        </P>
        <P>
          This section does not require you to indemnify ADVOK for losses caused by ADVOK&apos;s own conduct where such
          indemnification would be prohibited by applicable law.
        </P>
      </section>

      <section>
        <H>14. Changes to the Service or These Terms</H>
        <P>We may change or discontinue parts of the Service and may update these Terms from time to time.</P>
        <P>
          When we make changes, we will post the revised Terms and update the effective date. We will provide notice of
          material changes through the app, by email, or by another reasonable method where appropriate or required by
          law.
        </P>
        <P>
          Your continued use of the Service after revised Terms take effect constitutes acceptance of the revised Terms
          where permitted by law. If you do not agree to the revised Terms, you should stop using the Service.
        </P>
      </section>

      <section>
        <H>15. Governing Law and Disputes</H>
        <P>
          These Terms are governed by the laws of <strong className="text-white">[State and Country to be confirmed]</strong>,
          without regard to conflict-of-law principles, except where mandatory consumer protection laws provide otherwise.
        </P>
        <P>
          Any legal action arising out of or relating to these Terms or the Service will be brought in the courts of{" "}
          <strong className="text-white">[City, State, and Country to be confirmed]</strong>, subject to applicable law and
          any non-waivable rights to bring proceedings elsewhere.
        </P>
        <P>Nothing in this section limits rights or remedies that cannot lawfully be waived.</P>
      </section>

      <section>
        <H>16. General Provisions</H>
        <P>
          If any provision of these Terms is held unenforceable, the remaining provisions will remain in effect to the
          extent permitted by law.
        </P>
        <P>Our failure to enforce a provision does not constitute a waiver of that provision.</P>
        <P>
          These Terms, together with any applicable policies or additional terms presented to you, govern your use of the
          Service. If a translated version conflicts with the English version, the English version will control to the
          extent permitted by law.
        </P>
      </section>

      <section>
        <H>17. Contact Us</H>
        <P>For questions about these Terms, bookings, payments, or the Service, contact:</P>
        <ContactBlock />
      </section>
    </LegalLayout>
  );
}

export function PrivacyPage() {
  usePageTitle("Privacy Policy — ADVOK");
  return (
    <LegalLayout title="ADVOK Privacy Policy">
      <section>
        <P>
          This Privacy Policy explains how Voxon Consulting Pvt. Ltd., doing business as ADVOK (“ADVOK,” “we,” “us,” or
          “our”), collects, uses, stores, and shares information when you access or use the ADVOK mobile application and
          website (collectively, the “Service”).
        </P>
        <P>
          By using the Service, you acknowledge that you have read this Privacy Policy. Where applicable law requires
          consent for a particular processing activity, we will obtain that consent separately.
        </P>
      </section>

      <section>
        <H>1. Information We Collect</H>
        <P>The information we collect depends on how you use the Service.</P>
        <H3>1.1 Account and profile information</H3>
        <P>We may collect:</P>
        <Ul>
          <li>Name, phone number, and email address.</li>
          <li>Country and other profile details you provide.</li>
          <li>Profile photograph, if you upload one.</li>
          <li>Account identifiers and authentication information.</li>
        </Ul>
        <H3>1.2 Sign-in information</H3>
        <P>
          If you register or sign in using Google or Apple, we may receive information made available by the relevant
          provider, such as your name, email address, and provider-specific account identifier, subject to your settings
          and the provider&apos;s authorization process.
        </P>
        <P>We do not receive your Google or Apple password through these sign-in integrations.</P>
        <H3>1.3 Attorney and law firm information</H3>
        <P>For attorneys and law firms, we may collect:</P>
        <Ul>
          <li>Professional name and contact details.</li>
          <li>Bar registration numbers, licensing information, and verification documents.</li>
          <li>Practice areas and professional descriptions.</li>
          <li>Office address, availability, consultation schedules, and fees.</li>
          <li>Other information submitted to establish or manage a professional profile.</li>
        </Ul>
        <H3>1.4 Law student information</H3>
        <P>
          If you use student-related features, we may collect details such as your educational institution, course, year
          of study, and student identification information when required for a particular feature.
        </P>
        <H3>1.5 Booking and transaction information</H3>
        <P>
          We may collect and process consultation requests, appointment dates and times, booking status, cancellation
          information, refund records, transaction amounts, and information needed to resolve payment disputes.
        </P>
        <P>
          Payments are processed by Stripe or another designated payment provider. ADVOK does not intend to store full
          payment card numbers on its own systems. The payment provider may collect and process payment information under
          its own privacy policy.
        </P>
        <H3>1.6 Messages, case information, and documents</H3>
        <P>
          Depending on the features you use, we may process messages, consultation-related information, case details, and
          documents you upload or share through the Service.
        </P>
        <P>
          Please share only information necessary for the feature you are using. Do not upload another person&apos;s
          confidential or sensitive information unless you have the necessary authority and the feature is appropriate for
          that purpose.
        </P>
        <H3>1.7 Device and technical information</H3>
        <P>We may collect limited technical information, such as:</P>
        <Ul>
          <li>Device and application information.</li>
          <li>Push-notification tokens.</li>
          <li>Log records, timestamps, and diagnostic information.</li>
          <li>Security and authentication events.</li>
          <li>Technical information necessary to troubleshoot errors, prevent abuse, and maintain the Service.</li>
        </Ul>
        <P>
          The specific information collected depends on your device, operating system, permissions, and the integrations
          enabled in the app.
        </P>
      </section>

      <section>
        <H>2. How We Use Your Information</H>
        <P>We use information for the following purposes, as applicable:</P>
        <Ul>
          <li>
            <strong className="text-white">Account management:</strong> To register users, authenticate accounts, and
            maintain profiles.
          </li>
          <li>
            <strong className="text-white">Security:</strong> To verify sign-ins, detect suspicious activity, prevent
            fraud, and protect the Service.
          </li>
          <li>
            <strong className="text-white">Bookings:</strong> To facilitate consultation requests, communicate booking
            status, and coordinate users with attorneys.
          </li>
          <li>
            <strong className="text-white">Payments and refunds:</strong> To process transactions, manage cancellations,
            issue refunds, and resolve payment disputes.
          </li>
          <li>
            <strong className="text-white">Professional verification:</strong> To review attorney and law firm credentials
            where appropriate.
          </li>
          <li>
            <strong className="text-white">Communications:</strong> To send OTPs, booking notifications, service messages,
            and responses to support requests.
          </li>
          <li>
            <strong className="text-white">AI functionality:</strong> To process prompts and provide AI-generated legal
            information or educational responses when you use ADVOK AI.
          </li>
          <li>
            <strong className="text-white">Service improvement:</strong> To troubleshoot issues, evaluate performance, and
            improve reliability and usability.
          </li>
          <li>
            <strong className="text-white">Legal compliance:</strong> To meet applicable legal obligations and respond to
            lawful requests.
          </li>
          <li>
            <strong className="text-white">Protection of rights:</strong> To investigate misuse, enforce our Terms, and
            protect the safety, security, and rights of users and ADVOK.
          </li>
        </Ul>
        <P>We will use personal information for purposes consistent with this Policy and applicable law.</P>
      </section>

      <section>
        <H>3. SMS, OTP, and Mobile Information</H>
        <P>
          If you provide your phone number, ADVOK may use it to send one-time passcodes for authentication and
          service-related text messages, including consultation booking updates.
        </P>
        <P>
          Booking messages may include an attorney&apos;s name, appointment time, and contact information where necessary
          to facilitate the consultation.
        </P>
        <P>Message frequency varies according to your activity. Message and data rates may apply.</P>
        <P>
          You may reply <strong className="text-white">STOP</strong> to opt out of supported text messaging programs and{" "}
          <strong className="text-white">HELP</strong> for assistance, or contact us at{" "}
          <a className="text-white hover:underline" href="mailto:voxonconsultingbl@gmail.com">
            voxonconsultingbl@gmail.com
          </a>
          . Opting out of certain messages may prevent you from receiving OTPs or essential security and booking
          notifications.
        </P>
        <P>
          Where required, ADVOK will obtain appropriate consent before sending text messages. Consent to receive marketing
          messages, if offered, is not a condition of purchasing a consultation or using the Service.
        </P>
        <P>
          <strong className="text-white">
            Mobile information will not be shared with third parties or affiliates for their marketing or promotional
            purposes. Text messaging originator opt-in data and consent will not be shared with third parties, except with
            service providers that deliver text messages on our behalf or where otherwise permitted or required by law.
          </strong>{" "}
          Such service providers may include Twilio.
        </P>
        <P>Mobile carriers are not responsible for delayed or undelivered messages.</P>
      </section>

      <section>
        <H>4. How We Share Information</H>
        <P>We do not sell personal information in exchange for money. We may disclose information in the following circumstances.</P>
        <H3>4.1 With attorneys and other users</H3>
        <P>
          When you request a consultation, we share information reasonably necessary to process and conduct the booking
          with the relevant attorney or law firm. Depending on the booking stage, this may include your name, contact
          details, appointment information, and information you choose to provide about your matter.
        </P>
        <P>
          After an attorney accepts a consultation, the parties may receive additional contact details needed to
          coordinate the appointment.
        </P>
        <P>
          If you are an attorney, we may display your professional profile, practice areas, office information,
          availability, and fees to users of the Service.
        </P>
        <H3>4.2 With service providers</H3>
        <P>
          We may share information with providers that help us operate the Service, subject to applicable contractual,
          security, and legal requirements.
        </P>
        <P>These providers may include:</P>
        <Ul>
          <li>
            <strong className="text-white">Stripe:</strong> Payment processing and related transaction services.
          </li>
          <li>
            <strong className="text-white">Twilio:</strong> SMS and OTP delivery, where used.
          </li>
          <li>
            <strong className="text-white">Google Firebase:</strong> Push notifications and related application services,
            where enabled.
          </li>
          <li>
            <strong className="text-white">Amazon Web Services (AWS):</strong> Hosting, infrastructure, and storage
            services.
          </li>
          <li>
            <strong className="text-white">MongoDB:</strong> Database and data-storage services.
          </li>
          <li>
            <strong className="text-white">Google and Apple:</strong> Authentication and sign-in services.
          </li>
          <li>
            <strong className="text-white">OpenAI:</strong> Processing prompts and generating AI responses when you use
            ADVOK AI.
          </li>
        </Ul>
        <P>
          These providers may process information under their own privacy terms and according to the services they
          provide. Their actual access to data depends on the integrations and configurations ADVOK uses.
        </P>
        <H3>4.3 For legal and safety reasons</H3>
        <P>
          We may disclose information when reasonably necessary to comply with applicable law, respond to valid legal
          process, investigate fraud, enforce our Terms, protect users, or safeguard our legal rights.
        </P>
        <H3>4.4 Business transfers</H3>
        <P>
          If ADVOK undergoes a merger, acquisition, financing, restructuring, or sale of assets, information may be
          transferred as part of that transaction, subject to applicable legal requirements and appropriate safeguards.
        </P>
        <H3>4.5 With your direction or consent</H3>
        <P>We may share information when you direct us to do so or provide consent for a specific purpose.</P>
      </section>

      <section>
        <H>5. AI Features and Confidential Information</H>
        <P>
          ADVOK AI may process the text, questions, or other content you submit to generate legal information or
          educational responses.
        </P>
        <P>
          AI-generated responses may be inaccurate, incomplete, or unsuitable for your particular circumstances. They do
          not constitute legal advice.
        </P>
        <P>
          <strong className="text-white">
            Do not enter sensitive personal details, privileged communications, confidential client information, or
            confidential case documents into ADVOK AI unless the relevant feature expressly supports that use and you have
            reviewed the applicable terms and safeguards.
          </strong>
        </P>
        <P>
          Information submitted to AI features may be processed by our AI service provider to generate responses and
          operate the feature. The applicable provider&apos;s processing, retention, and data-use practices may depend on
          our service configuration and contractual arrangements.
        </P>
        <P>
          Before launch, ADVOK should confirm the AI provider&apos;s actual data-retention and training settings and
          ensure that the disclosures made to users accurately reflect those settings.
        </P>
      </section>

      <section>
        <H>6. Data Retention and Deletion</H>
        <P>
          We retain personal information for as long as reasonably necessary to provide the Service, maintain accounts,
          complete transactions, resolve disputes, enforce agreements, protect security, and comply with legal
          obligations.
        </P>
        <P>
          You may request account deletion through the app, where available, or by contacting us at{" "}
          <a className="text-white hover:underline" href="mailto:voxonconsultingbl@gmail.com">
            voxonconsultingbl@gmail.com
          </a>
          .
        </P>
        <P>
          After a deletion request is processed, we will delete or de-identify personal information that we no longer
          need, subject to applicable law, technical limitations, and legitimate retention requirements.
        </P>
        <P>
          Some information may need to be retained for a limited period, including transaction records, tax records,
          records needed to resolve disputes, security logs, or information we are legally required to preserve.
        </P>
        <P>
          Deleting your account may not immediately remove information already shared with another user, information held
          independently by third-party providers, or records that must legally be retained. Where applicable, we will
          handle such information in accordance with our legal obligations and the relevant provider&apos;s policies.
        </P>
      </section>

      <section>
        <H>7. Data Security</H>
        <P>
          We use reasonable administrative, technical, and organizational measures designed to protect personal
          information against unauthorized access, loss, misuse, alteration, and disclosure.
        </P>
        <P>
          These measures may include encryption in transit, access controls, authentication safeguards, and security
          features provided by our infrastructure providers.
        </P>
        <P>
          No method of electronic transmission or storage is completely secure. Accordingly, we cannot guarantee absolute
          security.
        </P>
        <P>
          You are responsible for protecting your account credentials and promptly notifying us if you suspect
          unauthorized access to your account.
        </P>
      </section>

      <section>
        <H>8. Your Privacy Rights and Choices</H>
        <P>Depending on your location and applicable law, you may have the right to:</P>
        <Ul>
          <li>Request access to personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of personal information.</li>
          <li>Obtain a copy of certain information in a portable format.</li>
          <li>Opt out of certain processing activities, where applicable.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Appeal certain privacy-related decisions, where required by law.</li>
        </Ul>
        <P>
          California residents and residents of other US states with applicable privacy laws may have additional rights,
          subject to the requirements, exceptions, and thresholds of those laws.
        </P>
        <P>
          To exercise a privacy right, contact{" "}
          <a className="text-white hover:underline" href="mailto:voxonconsultingbl@gmail.com">
            voxonconsultingbl@gmail.com
          </a>
          . We may need to verify your identity before processing a request.
        </P>
        <P>You may also:</P>
        <Ul>
          <li>Update profile information through the app, where available.</li>
          <li>Disable push notifications through your device settings.</li>
          <li>Opt out of supported SMS programs using the instructions in the message.</li>
          <li>Request account deletion or ask questions about how your information is used.</li>
        </Ul>
        <P>We will not unlawfully discriminate against you for exercising privacy rights available under applicable law.</P>
      </section>

      <section>
        <H>9. International Data Processing</H>
        <P>
          ADVOK is operated by Voxon Consulting Pvt. Ltd. and may use service providers that process information in the
          United States, India, or other countries where those providers operate.
        </P>
        <P>
          As a result, your information may be transferred to or processed in a country other than the country where you
          reside. Data protection laws in those countries may differ from those in your location.
        </P>
        <P>
          Where required by applicable law, we will use appropriate safeguards for international transfers of personal
          information.
        </P>
      </section>

      <section>
        <H>10. Children&apos;s Privacy</H>
        <P>
          The Service is intended for individuals aged 18 and older. We do not knowingly collect personal information from
          children under 18.
        </P>
        <P>
          If we learn that we have collected personal information from a child in circumstances where collection is not
          permitted, we will take appropriate steps to delete the information or otherwise address it in accordance with
          applicable law.
        </P>
        <P>
          If you believe a child has provided personal information to ADVOK, contact us at{" "}
          <a className="text-white hover:underline" href="mailto:voxonconsultingbl@gmail.com">
            voxonconsultingbl@gmail.com
          </a>
          .
        </P>
      </section>

      <section>
        <H>11. Third-Party Websites and Services</H>
        <P>
          The Service may contain links to third-party websites or integrate third-party services. Those third parties may
          collect and process information under their own privacy policies.
        </P>
        <P>
          ADVOK does not control the privacy practices of independent third-party websites. We encourage you to review
          their privacy notices before providing information to them.
        </P>
      </section>

      <section>
        <H>12. Changes to This Privacy Policy</H>
        <P>
          We may update this Privacy Policy to reflect changes in the Service, our data practices, legal requirements, or
          other operational needs.
        </P>
        <P>
          When we make changes, we will post the revised Policy and update the effective date. We may also provide notice
          through the app, by email, or through another reasonable method where appropriate or required by law.
        </P>
        <P>Where a change requires consent, we will obtain that consent as required by applicable law.</P>
      </section>

      <section>
        <H>13. Contact Us</H>
        <P>For questions, privacy requests, or concerns regarding this Privacy Policy, contact:</P>
        <ContactBlock />
      </section>
    </LegalLayout>
  );
}
