import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { EventsWeddingsSection } from "@/components/EventsWeddingsSection";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Music2, GraduationCap, Heart, Instagram, Youtube, Star } from "lucide-react";
import { motion } from "framer-motion";

import laurenPhoto from "@assets/257ADE3B-0388-40A5-9F6E-A34A60C4729A_1768423584638.jpeg";

const teachingGalleryImages = [
  { src: "", alt: "Teaching gallery image 1" },
  { src: "", alt: "Teaching gallery image 2" },
  { src: "", alt: "Teaching gallery image 3" },
];

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }  );
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const visibleTeachingGalleryImages = teachingGalleryImages.filter(
    (image) => image.src.trim().length > 0,
  );

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Woman playing violin or classical music theme */}
          <img
            src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1600&q=80"
            alt="Lauren Guerin wedding and event violinist performing in Portland, Oregon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 px-6 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-light tracking-[0.2em] mb-4 uppercase text-white/90">
              Wedding & Event Violinist · Teacher
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">
              Lauren Guerin
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
              Wedding & event violinist based in Portland, Oregon — refined musicianship, joyful learning, and live performances, with custom arrangements tailored to every occasion.</motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-serif px-8 py-6 text-lg rounded-none tracking-widest transition-transform hover:-translate-y-1"
              >
                REQUEST AVAILABILITY
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={laurenPhoto}
                  alt="Lauren Guerin professional violinist portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 -z-10 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Meet Lauren</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Lauren Guerin is a violinist with over 15 years of musical experience. After discovering music through the public school system, she earned a Bachelor’s degree from the University of Portland in Music Performance and has dedicated her career to sharing music with others.
                </p>
                <p>
                  Her greatest goal is bringing art, music, and theater to those who may not otherwise experience it. Her teaching philosophy centers on finding what excites each student — making learning engaging, meaningful, and joyful.
                </p>
                <p>
                  Lauren blends classical Suzuki-based training with traditional folk and fiddle styles, exploring sound, culture, and storytelling through music.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <GraduationCap className="w-5 h-5" />
                  <span>B.A. Music Performance</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Music2 className="w-5 h-5" />
                  <span>Suzuki Trained</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <p className="text-3xl md:text-4xl font-serif italic leading-relaxed">
            "Music is as joyful as it is challenging — a space for growth, confidence, and expression."
          </p>
        </motion.div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-24 bg-[#f6f7f6]">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Teaching & Lessons" 
            subtitle="Private instruction tailored to nurture each student's unique musical voice."
          />

          {visibleTeachingGalleryImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {visibleTeachingGalleryImages.map((image) => (
                <div key={image.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-white shadow-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Music2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Private Lessons</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    In-home private violin lessons tailored to each student’s learning style. I come to you to make learning convenient and comfortable.
                  </p>
                  <Separator className="my-6" />
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>30 Minutes</span>
                      <span className="font-semibold text-gray-900">$35</span>
                    </div>
                    <div className="flex justify-between">
                      <span>45 Minutes</span>
                      <span className="font-semibold text-gray-900">$50</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Teaching Philosophy</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Lessons adapt to how each student learns best — through exploration, repetition, listening, or direct instruction.
                  </p>
                  <p className="text-gray-600 text-sm italic mt-auto">
                    Parents are encouraged to observe lessons to help support confident, consistent practice at home.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Instrument Guidance</h3>
                  <p className="text-gray-600 mb-6">
                    Students provide their own violin. Renting is often recommended for growing musicians to ensure proper sizing.
                  </p>
                  <div className="mt-auto p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                    <strong>Tip:</strong> Kennedy Violins is a trusted rental and purchase option I often recommend.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events & Weddings Section */}
      <EventsWeddingsSection />

      {/* Performances Section */}
      <section id="performances" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Performances & Arrangements" 
            subtitle="Custom live violin for weddings, events, and unforgettable moments."
          />

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Clients may choose from a curated set list or request a custom arrangement. 
            Each booking includes one specialty arrangement to make your event truly unique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://www.youtube.com/embed/YE-sJr0BHI0",
              "https://www.youtube.com/embed/jvQ4mOr6X5M",
              "https://www.youtube.com/embed/8AHBhoM4N4k"
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-video w-full rounded-lg overflow-hidden shadow-lg bg-black"
              >
                <iframe 
                  src={src} 
                  title={`Performance Video ${i+1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-[#f6f7f6] p-10 rounded-2xl">
            <h3 className="text-2xl font-serif text-center mb-8">What People Are Saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600 mb-4">"Lauren was absolutely magical — professional, engaging, and incredibly talented."</p>
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600 mb-4">"Her music brought warmth and joy to our event. Guests are still talking about it."</p>
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a 
                href="https://www.gigsalad.com/the_fiddle_fairy_portland" 
                target="_blank" 
                rel="noreferrer"
                className="text-primary hover:text-primary/80 font-medium underline underline-offset-4"
              >
                View more reviews on GigSalad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Request Availability</h2>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                For lessons, events, or custom arrangements, please reach out. I would love to be a part of your musical journey or special celebration.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://www.instagram.com/lauren_guerin_violin/?hl=en" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="text-lg">Follow on Instagram</span>
                </a>
                
                <a 
                  href="https://www.youtube.com/@thefiddlefairy" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </div>
                  <span className="text-lg">Subscribe on YouTube</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-lg shadow-2xl text-gray-900">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>© 2026 Lauren Guerin · Violinist & Teacher · Lauren Guerin</p>

          <p className="mt-3">
            If the contact form is unavailable, you may reach her directly at{" "}
            <a href="mailto:guerinlaurenllg@gmail.com" className="underline hover:text-white">
              guerinlaurenllg@gmail.com
            </a>.
          </p>
        </div>
      </footer>
    </div>
);
}
