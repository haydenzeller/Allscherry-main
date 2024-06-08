import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PageTitle from "@/app/components/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AllsCherry | Terms and Conditions",
    description: "AllsCherry Terms and Conditions Page - AllsCherry Terms and Conditions Information",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
};

export default function TermsAndConditions() {
    return (
        <main  className="flex flex-col bg-base-100 max-w-svw">
          <Header />
          <PageTitle title={"Terms and Conditions"}/>
          <section className="items-center justify-center gap-3 flex flex-col m-5">
                <p>Last updated: June 2, 2024</p>

                <h2>1. Introduction</h2>
                <p>
                    These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, AllsCherry accessible at AllsCherry.com.
                </p>

                <h2>2. Intellectual Property Rights</h2>
                <p>
                    Other than the content you own, under these Terms, AllsCherry and/or its licensors own all the intellectual property rights and materials contained in this Website.
                </p>
                <p>
                    You are granted limited license only for purposes of viewing the material contained on this Website.
                </p>

                <h2>3. Restrictions</h2>
                <p>You are specifically restricted from all of the following:</p>
                <ul className="">
                    <li className="list-disc">publishing any Website material in any other media;</li>
                    <li className="list-disc">selling, sublicensing and/or otherwise commercializing any Website material;</li>
                    <li className="list-disc">publicly performing and/or showing any Website material;</li>
                    <li className="list-disc">using this Website in any way that is or may be damaging to this Website;</li>
                    <li className="list-disc">using this Website in any way that impacts user access to this Website;</li>
                    <li className="list-disc">using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                    <li className="list-disc">engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                    <li className="list-disc">using this Website to engage in any advertising or marketing.</li>
                </ul>
                <p>
                    Certain areas of this Website are restricted from being accessed by you and AllsCherry may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                </p>

                <h2>4. Your Content</h2>
                <p>
                    In these Website Standard Terms and Conditions, &quot;Your Content&quot; shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant AllsCherry a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                </p>
                <p>
                    Your Content must be your own and must not be invading any third-party&apos;s rights. AllsCherry reserves the right to remove any of Your Content from this Website at any time without notice.
                </p>

                <h2>5. No warranties</h2>
                <p>
                    This Website is provided &quot;as is,&quot; with all faults, and AllsCherry express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
                </p>

                <h2>6. Limitation of liability</h2>
                <p>
                    In no event shall AllsCherry, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. AllsCherry, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                </p>

                <h2>7. Indemnification</h2>
                <p>
                    You hereby indemnify to the fullest extent AllsCherry from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
                </p>

                <h2>8. Severability</h2>
                <p>
                    If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
                </p>

                <h2>9. Variation of Terms</h2>
                <p>
                    AllsCherry is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
                </p>

                <h2>10. Assignment</h2>
                <p>
                    The AllsCherry is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
                </p>

                <h2>11. Entire Agreement</h2>
                <p>
                    These Terms constitute the entire agreement between AllsCherry and you in relation to your use of this Website, and supersede all prior agreements and understandings.
                </p>

                <h2>12. Governing Law & Jurisdiction</h2>
                <p>
                    These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
                </p>            
            </section>
          <Footer />
      </main>
    );
}

