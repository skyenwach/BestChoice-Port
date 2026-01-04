"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioPages = [
  {
    handle: "truetalkwithted",
    name: "TED (Tolu, Ella, Dara)",
    posts: "802",
    followers: "112K",
    following: "0",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/516841935_18063375110470154_2474052255532848869_n-1765924041446.jpg?width=400&height=400&resize=contain",
  },
  {
    handle: "olivegreene_nutrition",
    name: "Olive Greene Nutrition",
    posts: "132",
    followers: "7,145",
    following: "59",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/404918781_2075839119422659_1868711386567073292_n-1765924376312.jpg?width=400&height=400&resize=contain",
  },
  {
    handle: "thediaryofanaijaimmigrant",
    name: "Diary of a Naija Immigrant.",
    verified: true,
    posts: "212",
    followers: "1,260",
    following: "1,133",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/463955574_905769928165943_73053749851001108_n-1765924356631.jpg?width=400&height=400&resize=contain",
  },
  {
    handle: "adoniaa_realestate",
    name: "Adoniaa Real Estate",
    posts: "31",
    followers: "271",
    following: "122",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/498255359_17845687527478998_5453290409388673760_n-1765924119746.jpg?width=400&height=400&resize=contain",
  },
];

export function Portfolio() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-muted/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Pages I&apos;ve Helped Grow
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Trusted by 15+ brands over 5+ years. These are some of the pages I&apos;ve helped grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioPages.map((page, index) => (
            <motion.a
              key={page.handle}
              href={`https://instagram.com/${page.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] block"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30">
                  <Image
                    src={page.image}
                    alt={page.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHxAAAgICAwEBAQAAAAAAAAAAAQIAAwQREiFBMWFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANBzsO3IvNlVy1jGgAZl+ERE2LHJZ//Z"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{page.name}</h3>
                    {page.verified && (
                      <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm opacity-60">@{page.handle}</p>
                </div>
              </div>

              <div className="flex justify-around mb-4 py-4 border-y border-primary/20">
                <div className="text-center">
                  <div className="font-bold text-lg">{page.posts}</div>
                  <div className="text-sm opacity-60">posts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{page.followers}</div>
                  <div className="text-sm opacity-60">followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{page.following}</div>
                  <div className="text-sm opacity-60">following</div>
                </div>
              </div>


            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
