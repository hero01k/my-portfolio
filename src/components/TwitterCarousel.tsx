import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'motion/react';
import { ExternalLink, Twitter, Globe, Film } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideItem {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'twitter' | 'article' | 'video';
  date: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    title: "Best AI Making Video",
    description: "Deep dive into the most powerful Platform Where we can find all AI tools with small cost .",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800",
    url: "https://x.com/0xmunem_bro/status/2041022126166327566",
    type: 'twitter',
    date: "2026 Apr 6"
  },
  {
    id: 2,
    title: "Informatic Post",
    description: "Using Smooth Visual and represent most ppowerful info about project .",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
    url: "https://x.com/0xmunem_bro/status/2037468184933216500",
    type: 'twitter',
    date: "2026 Mar 27"
  },
  {
    id: 3,
    title: "Guiding Post",
    description: "Guding user , who want to use but can't understand.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    url: "https://x.com/0xmunem_bro/status/2011863605176909950",
    type: 'twitter',
    date: "2026 jan 16"
  },
  {
    id: 4,
    title: "Best Article",
    description: "Making an Article about Warden Protocol , where have all important info.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    url: "https://x.com/0xmunem_bro/status/2011076954150355008",
    type: 'article',
    date: "2026 jan 13"
  }
];

export function TwitterCarousel() {
  return (
    <section id="broadcast" className="py-24 px-4 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="font-display text-2xl md:text-4xl font-black uppercase tracking-widest text-white">
              Best <span className="text-crypto-blue">Content</span>
            </h2>
            <p className="text-[9px] text-white/30 font-mono mt-1 uppercase tracking-[0.4em]">
              Selected works :: High Signal
            </p>
          </div>
          <div className="flex gap-4 mb-2">
             <div className="h-0.5 w-12 bg-crypto-blue shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
             <div className="h-0.5 w-4 bg-white/20" />
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <motion.a 
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="group relative block h-[450px] bg-crypto-black border border-white/10 rounded-2xl overflow-hidden glass transition-all duration-500 hover:border-crypto-blue/40"
              >
                {/* Image Wrap */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crypto-black via-crypto-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="mb-4 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-crypto-blue tracking-tighter bg-crypto-blue/10 px-2 py-1 border border-crypto-blue/20">
                      [{slide.date}]
                    </span>
                    <div className="p-2 bg-white/5 rounded-full border border-white/10">
                      {slide.type === 'twitter' && <Twitter size={14} className="text-crypto-blue" />}
                      {slide.type === 'article' && <Globe size={14} className="text-crypto-blue" />}
                      {slide.type === 'video' && <Film size={14} className="text-crypto-blue" />}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-crypto-blue transition-colors">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-white/40 font-mono leading-relaxed uppercase line-clamp-2 mb-4">
                    {slide.description}
                  </p>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-px bg-crypto-blue" />
                    <ExternalLink size={12} className="text-crypto-blue" />
                  </div>
                </div>

                {/* Cyberpunk Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
                   <div className="absolute top-4 right-4 w-1 h-1 bg-crypto-blue shadow-[0_0_10px_rgba(0,255,0,1)]" />
                   <div className="absolute top-4 right-8 w-1 h-1 bg-white/20" />
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #00ff00 !important;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(0, 255, 0, 0.2);
          backdrop-filter: blur(10px);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #00ff00 !important;
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
