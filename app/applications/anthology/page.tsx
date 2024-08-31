"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import mailLogo from "@/public/mail.svg";
import Link from "next/link";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function AnthologyForm() {
  const [formData, setFormData] = useState<{
    [key: string]: string | string[] | boolean;
  }>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    date: "",
    profession: "",
    examples: "",
    artisticPractice: "",
    experience: "",
    pastParticipation: "",
    pastProjects: "",
    interest: "",
    themeThoughts: "",
    heardFrom: "",
    agreement: false,
  });

  const [status, setStatus] = useState({
    error: false,
    success: false,
    cloudflare: "",
  });

  const [otherProfession, setOtherProfession] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    setStatus({ ...status, error: false });
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "profession" && value !== "Other") {
      setOtherProfession(""); // Clear the other profession input if a predefined option is selected
    }
  };

  const handleOtherProfessionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherProfession(e.target.value);
    setFormData({ ...formData, profession: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const requiredFields = [
      "name",
      "surname",
      "email",
      "date",
      "profession",
      "examples",
      "agreement",
    ];

    const missingField = requiredFields.find((field) => !formData[field]);
    if (missingField) {
      setStatus({ ...status, error: true });
      return;
    }

    try {
      const res = await fetch("/api/submitAnthologyForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ ...status, success: true });
      } else {
        console.error("Error submitting form:", res.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <main className="flex flex-col bg-base-100 min-h-screen">
      <Header />
      <section className="flex flex-col justify-center items-center min-w-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-12 bg-secondary py-2 px-28 rounded-3xl text-center text-black font-semibold">
            <h1>AllsCherry Annual Anthology Application Form</h1>
          </div>
          <div className="flex mt-6 flex-col items-left justify-left">
            <p>
              <i>*indicates a required field</i>
            </p>
            <p>
              <i>If something does not apply to you, type N/A</i>
            </p>
          </div>
          <div className="bg-primary rounded-full h-3 w-11/12 mt-6" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full text-black"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="*Name"
            onChange={handleInputChange}
            className="mt-6 text-center p-2 rounded-3xl w-3/4"
          />
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="*Surname"
            onChange={handleInputChange}
            className="mt-6 text-center p-2 rounded-3xl w-3/4"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="*Email"
            onChange={handleInputChange}
            className="mt-6 text-center p-2 rounded-3xl w-3/4"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            onChange={handleInputChange}
            className="mt-6 text-center p-2 rounded-3xl w-3/4"
          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Mailing Address, Postal Code"
            onChange={handleInputChange}
            className="mt-6 text-center p-2 rounded-3xl w-3/4"
          />
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
            onChange={handleInputChange}
            className="mt-6 text-center p-2 rounded-3xl w-3/4"
          />
          <input
            type="date"
            id="date"
            name="date"
            placeholder="*Date (DD/MM/YY)"
            onChange={handleInputChange}
            className="mt-6 text-center p-2 rounded-3xl w-3/4"
          />
          <div className=" bg-gray-500 mt-6 rounded-full h-3 w-1/2" />
          <h2 className="mt-6 bg-white rounded-xl p-3 text-center text-black w-3/4">
            *Profession (Multiple Choice, one or more choices)
          </h2>
          <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
            {["Illustrator", "Inker", "Colourist", "Writer"].map((prof) => (
              <div
                key={prof}
                className="bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl w-1/2 py-2"
              >
                <input
                  type="radio"
                  id={prof.toLowerCase()}
                  name="profession"
                  value={prof}
                  onChange={handleInputChange}
                  className="appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"
                />
                <label htmlFor={prof.toLowerCase()} className="mr-8">
                  {prof}
                </label>
              </div>
            ))}
            <div className="w-3/4 bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl py-2">
              <input
                type="radio"
                id="other"
                name="profession"
                value="other"
                onChange={handleInputChange}
                className=" appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"
              />
              <label htmlFor="other" className="mr-8">
                Other
              </label>
              <input
                type="text"
                id="name"
                name="profession"
                onChange={handleInputChange}
                placeholder="Please specify :)"
                className="text-center p-2 rounded-3xl w-1/2 border-base-100"
              />
            </div>
          </div>
          <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">
            *How might you describe your artistic practice?
          </h2>
          <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
            {[
              "My art is a hobby",
              "My art is professional",
              "My art is my full time job",
            ].map((practice) => (
              <div
                key={practice}
                className="bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl w-1/2 py-2"
              >
                <input
                  type="radio"
                  id={practice.toLowerCase().replace(/ /g, "")}
                  name="artisticPractice"
                  value={practice}
                  onChange={handleInputChange}
                  className="appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"
                />
                <label
                  htmlFor={practice.toLowerCase().replace(/ /g, "")}
                  className="mr-8"
                >
                  {practice}
                </label>
              </div>
            ))}
          </div>
          <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">
            If you chose professional/serious, how long would you say
            you&apos;ve worked this way?
          </h2>
          <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
            {["1-2 years", "3-5 years", "6-9 years", "10+ years"].map(
              (years) => (
                <div
                  key={years}
                  className="bg-white text-black flex flex-row items-center justify-left pl-5 mt-6 rounded-3xl w-1/2 py-2"
                >
                  <input
                    type="radio"
                    id={years.replace(/ /g, "")}
                    name="experience"
                    value={years}
                    onChange={handleInputChange}
                    className="appearance-none w-5 h-5 mr-5 rounded-full border-2 border-base-100 checked:bg-base-100"
                  />
                  <label htmlFor={years.replace(/ /g, "")} className="mr-8">
                    {years}
                  </label>
                </div>
              )
            )}
          </div>
          <h2 className="mt-12 bg-white rounded-t-xl p-3 text-center text-black w-3/4">
            *Have you participated in a collaborative effort with AllsCherry in
            the past?
          </h2>
          <textarea
            id="pastParticipation"
            name="pastParticipation"
            onChange={handleInputChange}
            placeholder="Type your answer here..."
            className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"
          />
          <h2 className="mt-12 bg-white rounded-t-xl p-3 text-center text-black w-3/4">
            If you answered yes, which project(s) did you participate in, and
            when?
          </h2>
          <textarea
            id="pastProjects"
            name="pastProjects"
            onChange={handleInputChange}
            placeholder="Type your answer here..."
            className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"
          />
          <h2 className="mt-12 bg-white rounded-t-xl p-3 text-center text-black w-3/4">
            *Why might you be interested in joining the AllsCherry Annual
            Anthology? What do you hope to learn/gain from it? Be descriptive,
            we love to hear your thoughts! (300 words)
          </h2>
          <textarea
            id="interest"
            name="interest"
            onChange={handleInputChange}
            placeholder="Type your answer here..."
            className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"
          />
          <h2 className="mt-12 bg-white rounded-t-xl p-3 text-center text-black w-3/4">
            What are your thoughts on this year&apos;s theme/idea? What ideas
            might you have to contribute? (300 words)
          </h2>
          <textarea
            id="themeThoughts"
            name="themeThoughts"
            onChange={handleInputChange}
            placeholder="Type your answer here..."
            className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"
          />
          <h2 className="mt-12 bg-white rounded-t-xl p-3 text-center text-black w-3/4">
            *How did you hear of the AllsCherry Anthology? (short answer)
          </h2>
          <textarea
            id="heardFrom"
            name="heardFrom"
            onChange={handleInputChange}
            placeholder="Type your answer here..."
            className="mt-0 text-left h-40 text-black p-2 rounded-b-3xl w-3/4"
          />
          <h2 className="mt-12 bg-white rounded-xl p-3 text-center text-black w-3/4">
            *The AllsCherry Anthology is a 4 month long project, starting from
            May until August each year with a set budget and timeline for
            artists to work in. Equally split print run payment and deadlines
            are expected to be complete upon set deadlines. By submitting this
            form you understand that your acceptance requires you to work within
            this timeline and fulfil the given due-dates. should you be
            accepted. Please hit yes if you understand.
          </h2>
          <div className="flex flex-col items-center justify-center mt-6 text-center w-full">
            <div className="bg-white pl-4 text-black flex items-center rounded-3xl w-1/3 py-2">
              <input
                type="radio"
                id="agreement"
                name="agreement"
                value="yes"
                checked={formData.agreement === "yes"}
                onChange={handleInputChange}
                className="appearance-none w-5 h-5 mr-3 rounded-full border-2 border-base-100 checked:bg-base-100"
              />
              <label htmlFor="agreement" className="ml-2">
                Yes
              </label>
            </div>
          </div>
          <Turnstile
            className="cf-turnstile mt-12"
            siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY || ""}
            onSuccess={() => setStatus({ ...status, cloudflare: "solved" })}
          />
          {status.cloudflare === "solved" && (
            <div className="flex flex-col justify-center items-center mt-6">
              {status.error && (
                <p className="text-red-500">
                  Please fill in all required fields
                </p>
              )}
              {status.success && (
                <p className="text-green-500">Form submitted successfully!</p>
              )}
              <button
                type="submit"
                className="bg-primary mt-6 text-black p-2 border-b-accent border-b-4 rounded-2xl block w-28 text-center shadow active:translate-y-0.5 active:shadow-none active:border-b-0 active:mt-6"
              >
                Submit!
              </button>
            </div>
          )}
        </form>
        <section className="flex flex-col items-center justify-center mx-1 mt-14 gap-5">
          <Link
            href="/info/contact#contactForm"
            className="flex flex-row items-center justify-center gap-5 bg-white rounded-3xl px-5 py-1"
          >
            <Image
              src={mailLogo}
              alt="Mail Logo"
              width={100}
              height={100}
              className="w-10"
            />
            <h2 className="text-black">Email us here!</h2>
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  );
}
