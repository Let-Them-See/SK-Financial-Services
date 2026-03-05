'use client'

import { motion } from 'framer-motion'

const testimonials = [
    {
        name: "Mr. Pulkit Shah",
        designation: "Country Manager – Emeraude Polymers",
        text: "I knew Sheetal Khanna a couple of years before I approached her to manage my portfolio. I was not doing any serious financial planning, But She gave us a thought and explained us in very proper manner. Today we are highly satisfied with the services given by SK Financial Services.",
        image: "https://skfinservices.com/media/images/home/pulkit.jpg"
    },
    {
        name: "Mr. Gaurav Sharma",
        designation: "Director, Sales – Kellogg India",
        text: "Professionally, She is competent, knowledgeable and has a holistic approach to financial planning. She listens well to her client's needs and is able to recommend products accordingly. Highly Recommended for NRI investments.",
        image: "https://skfinservices.com/media/images/home/guarav.jpg"
    },
    {
        name: "Harjeet Singh",
        designation: "Vice President – HDFC Bank",
        text: "It's always a delight to interact with Sheetal. She brings her passion and deep knowledge to the table while advising which adds great value to any investor. Keep it up!",
        image: "https://skfinservices.com/media/images/home/harjeet.jpg"
    },
    {
        name: "Ravi Shankar & Shilpa Mahajan",
        designation: "Director Delivery Excellence - Cognizant & Principal Designer respectively",
        text: "We were looking for someone who could not just advise us on investments but be our financial partner. Have been associated with SK Financials for more than a decade now and absolutely no regrets. We truly appreciate the proactive approach.",
        image: "https://skfinservices.com/media/images/home/ravi.jpg"
    },
    {
        name: "Ami & Rahul Sanghavi",
        designation: "Dgm(Finance) , TATA Communication & VP, InCred Finance",
        text: "Sheetal has deep knowledge of equity and market linked products. SK financial services provide right asset allocation as per client's risk appetite & time horizon. We are extremely happy.",
        image: "https://skfinservices.com/media/images/home/ami.jpg"
    },
    {
        name: "Ms. Rashmi Bipin Shingala",
        designation: "Home Maker",
        text: "For me, being able to track what I have saved to what my goals are, is critical to my peace of mind. Sk financial services understands my needs extremely well. I am relieved that I am taking the right steps.",
        image: "https://skfinservices.com/media/images/home/rashmi.jpg"
    },
    {
        name: "Nikhil & Anisha Kapur",
        designation: "Self Employed",
        text: "Our journey with SKFS has been simply phenomenal, especially during tough times. The firm puts a lot of time giving unbiased and genuine advice. Thank you SKFS.",
        image: "https://skfinservices.com/media/images/home/anisha.jpg"
    },
    {
        name: "Parag Oza",
        designation: "General Manager - Sun Pharmaceuticals Ltd.",
        text: "Finding right guidance helps to achieve goals accurately. We were misguided before and suffered heavy losses, then Sheetal Khanna became our guiding light. Very happy with the portfolio performance.",
        image: "https://skfinservices.com/media/images/home/parag.jpg"
    },
    {
        name: "Alok Chokhani",
        designation: "CEO , ARAPL",
        text: "SK financial services gives me peace of mind by managing all of my financial assets. It's not about product selling, it's totally about customized services. Excellent support team.",
        image: "https://skfinservices.com/media/images/home/alok.jpg"
    },
    {
        name: "Sandeep & Rati Jatia",
        designation: "Managing Director - Raunaq Group & Director respectively",
        text: "Excellent service and totally unbiased advice by SK financial services. Very prompt service to handle any queries. We highly recommend Sheetal to our friends and family.",
        image: "https://skfinservices.com/media/images/home/rati.jpg"
    },
    {
        name: "Abhinay & Rashmi Deo",
        designation: "Film Director & Brand Consultant",
        text: "Sheetal makes it a point to explain everything before investments. Also SKFS ensures that as an NRI, all my investments and compliances are well taken care of seamlessly.",
        image: "https://skfinservices.com/media/images/home/abhinay.jpg"
    },
    {
        name: "Vikas & Manisha Bothra",
        designation: "Business Head - Reliance Retail & HR Professional",
        text: "SKFS is a one stop solution for all our financial needs. From customized goal based planning to regular tracking, they do it all seamlessly. Extremely satisfied with their services.",
        image: "https://skfinservices.com/media/images/home/vikas.jpg"
    }
]

export default function TestimonialsSection() {
    // Duplicate array for infinite scroll effect
    const repeatedTestimonials = [...testimonials, ...testimonials]

    return (
        <section className="py-24 bg-navy overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-navy-dark border-b border-light-gray/10"></div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="w-12 h-1 bg-gold rounded-full"></div>
                        <span className="text-gold font-bold uppercase tracking-widest text-sm">Client Stories</span>
                        <div className="w-12 h-1 bg-gold rounded-full"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white"
                    >
                        What Our Clients Say
                    </motion.h2>
                </div>
            </div>

            <div className="relative z-10 w-full overflow-hidden flex pb-12">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 80, // Very slow transition
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-8 px-4 whitespace-nowrap pl-[10vw]"
                >
                    {repeatedTestimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 w-[400px] md:w-[450px] shadow-2xl flex-shrink-0 flex flex-col whitespace-normal group hover:ring-2 hover:ring-gold transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-gold text-7xl font-serif leading-none absolute top-4 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                "
                            </div>

                            <p className="text-gray-700 italic mb-8 relative z-10 flex-grow text-[15px] leading-relaxed">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold shadow-md shrink-0 bg-navy/10 flex items-center justify-center font-bold text-navy text-xl">
                                    {/* Fallback pattern while images load */}
                                    {t.image ? (
                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = t.name.charAt(0) }} />
                                    ) : t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-navy font-playfair text-lg leading-tight">{t.name}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mt-1 leading-snug">{t.designation}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="container relative z-10 mx-auto px-4 mt-8 flex justify-center">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gold"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
            </div>
        </section>
    )
}
