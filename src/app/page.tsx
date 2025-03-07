import * as motion from "motion/react-client"

// Components
import { Instagram, Tiktok, ShoppingCart, Account } from "@vectopus/atlas-icons-react"

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center gap-12 lg:gap-12 justify-center mx-auto max-w-3/4 lg:max-w-1/2 min-h-dvh">
                {/* Header */}
                <header className="flex flex-col items-center justify-center space-y-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            type: "tween",
                            ease: [.45, .57, .53, .92],
                            delay: 0.3,
                        }}
                        className="text-2xl lg:text-3xl font-bold italic text-pink-300/70"
                    >
                        Weroniczka
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            type: "tween",
                            ease: [.45, .57, .53, .92],
                            delay: 0.6,
                        }}
                        className="text-md lg:text-lg tracking-wide text-neutral-500 text-center"
                    >
                        Content Creator <span className="text-pink-300/70">-</span> Skincare & Beauty Lover
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            type: "tween",
                            ease: [.45, .57, .53, .92],
                            delay: 0.9,
                        }}
                        className="text-md lg:text-lg tracking-wide text-neutral-500 text-center"
                    >
                        Contact: <span className="italic text-pink-300/70">da.dahliaa8@gmail.com</span>
                    </motion.p>
                </header>

                {/* Links */}
                <motion.section
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 } // Stagger animation
                        }
                    }}
                >
                    {[
                        { href: "https://ystyle.co/1FTE", icon: <ShoppingCart size={16} />, text: "5% OFF at YesStyle: WER0090" },
                        { href: "https://www.yesstyle.com/en/influencers.html?irirco=WER0090&utm_term=WER0090&utm_medium=infreferral&mcg=influencer&utm_source=influencer&utm_campaign=iriprivate", icon: <Account size={16} />, text: "Become YesStyle Influencer" },
                        { href: "https://www.instagram.com/w_pawelczyk/", icon: <Instagram size={16} />, text: "Instagram" },
                        { href: "https://www.instagram.com/w_pawelczyk/", icon: <Tiktok size={16} />, text: "TikTok" }
                    ].map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                type: "tween",
                                ease: [.45, .57, .53, .92],
                                delay: 1.5 + index * 0.3 // Delay for each item
                            }}
                            className="group flex flex-col relative overflow-hidden bg-white/5 backdrop-saturate-[1.8] backdrop-blur-lg shadow-lg rounded-lg border border-neutral-300/50 box-border"
                        >
                            <div className="flex p-3 z-10 w-full justify-start items-center rounded-t-lg gap-2 pb-3">
                                <div className="flex justify-center items-center p-2 rounded-full text-pink-500 bg-pink-500/20">
                                    {link.icon}
                                </div>
                                <p className="tracking-widest text-neutral-500 italic text-sm lg:text-md">{link.text}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.section>
            </div>
        </main>
    )
}
