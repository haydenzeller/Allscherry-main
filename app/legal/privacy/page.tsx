import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PageTitle from "@/app/components/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AllsCherry | Privacy Policy",
    description: "AllsCherry Privacy Policy Page - AllsCherry Privacy Policy Information",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Privacy Policy",
        description: "AllsCherry Privacy Policy Page - AllsCherry Privacy Policy Information",
        images: [
            {
                url: "https://allscherry.com/icon.svg",
                width: 1200,
                height: 630,
                alt: "AllsCherry Logo",
            },
        ],
    },
};

export default function PrivacyPolicy() {
    return (
        <main  className="flex flex-col bg-base-100 max-w-svw">
          <Header />
          <PageTitle title={"Privacy Policy"}/>
          <section className="items-center justify-center gap-3 flex flex-col m-5">
            <p>Last updated: June 2, 2024</p>
            <p>
                Welcome to AllsCherry! We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, AllsCherry.com (the &quot;Site&quot;). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>

            <h3>Personal Data</h3>
            <p>
                Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards. If you choose to share data about yourself via your profile, online chat, or other interactive areas of the Site, please be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Site.
            </p>

            <h3>Derivative Data</h3>
            <p>
                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. If you are using our mobile application, this information may also include your device name and type, your operating system, your phone number, your country, and other interactions with the application and other users via server log files, as well as any other information you choose to provide.
            </p>

            <h3>Financial Data</h3>
            <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
            </p>

            <h3>Mobile Device Data</h3>
            <p>
                Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.
            </p>

            <h3>Third-Party Data</h3>
            <p>
                Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Site permission to access this information.
            </p>

            <h2>Use of Your Information</h2>
            <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
                <li className="list-disc">Create and manage your account.</li>
                <li className="list-disc">Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                <li className="list-disc">Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                <li className="list-disc">Respond to your comments, questions, and requests and provide customer service.</li>
                <li className="list-disc">Communicate with you about products, services, offers, promotions, rewards, and events, and provide other news and information about the Site.</li>
                <li className="list-disc">Monitor and analyze trends, usage, and activities in connection with the Site.</li>
                <li className="list-disc">Personalize and improve the Site and provide advertisements, content, or features that match user profiles or interests.</li>
                <li className="list-disc">Facilitate transactions and payments.</li>
                <li className="list-disc">Assist law enforcement and respond to subpoenas.</li>
                <li className="list-disc">Perform other business activities as needed.</li>
                <li className="list-disc">Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

            <h3>By Law or to Protect Rights</h3>
            <p>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>

            <h3>Business Transfers</h3>
            <p>
                We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>

            <h3>Affiliates</h3>
            <p>
                We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
            </p>

            <h3>Marketing Communications</h3>
            <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
            </p>

            <h3>Other Third Parties</h3>
            <p>
                We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.
            </p>

            <h3>Sale or Bankruptcy</h3>
            <p>
                If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity. If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may decline to honor commitments we made in this Privacy Policy.
            </p>

            <h2>Security of Your Information</h2>
            <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>Policy for Children</h2>
            <p>
                We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us at privacy@AllsCherry.com.
            </p>

            <h2>Controls for Do-Not-Track Features</h2>
            <p>
                Most web browsers and some mobile operating systems include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
            </p>

            <h2>Options Regarding Your Information</h2>

            <h3>Account Information</h3>
            <p>
                You may at any time review or change the information in your account or terminate your account by:
            </p>
            <ul>
                <li className="list-disc">Logging into your account settings and updating your account.</li>
                <li className="list-disc">Contacting us using the contact information provided below.</li>
            </ul>
            <p>
                Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
            </p>

            <h3>Emails and Communications</h3>
            <p>
                If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:
            </p>
            <ul>
                <li className="list-disc">Noting your preferences at the time you register your account with the Site.</li>
                <li className="list-disc">Logging into your account settings and updating your preferences.</li>
                <li className="list-disc">Contacting us using the contact information provided below.</li>
            </ul>
            <p>
                If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
                <strong>AllsCherry</strong><br />
                Email: privacy@AllsCherry.com
            </p>

            <h2>Updates to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on the Site and updating the &quot;Last Updated&quot; date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <p>Thank you for choosing AllsCherry!</p>
            </section>
          <Footer />
      </main>
    );
}
