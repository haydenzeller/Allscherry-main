import Image from "next/image";
import titleBubble from "@/public/page-title-bubbles.svg";

export default function PageTitle({ title = "" }) {
    return (
        <section className="flex flex-col justify-center items-center w-full mt-14">
            <div className="w-52 relative"> {/* Ensure relative positioning */}
                <Image priority src={titleBubble} alt={title} />
                <div className="absolute inset-0 flex justify-center items-center p-8 mb-7"> {/* Center the text */}
                    <h2 className="text-white text-center text-lg">{title}</h2> {/* Adjust text styling as needed */}
                </div>
            </div>
        </section>
    );
}
