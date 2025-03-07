import { Instagram, Tiktok, ShoppingCart, Account } from "@vectopus/atlas-icons-react"

export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-center gap-12 lg:gap-9 justify-center mx-auto max-w-3/4 lg:max-w-1/2 min-h-dvh">
                {/* Header */}
                <header className="flex flex-col items-center justify-center space-y-2">
                    <h1 className="text-2xl lg:text-3xl font-bold italic text-pink-300/70">Weroniczka</h1>
                    <p className="text-md lg:text-lg tracking-wide text-neutral-500 text-center">Content Creator - Skincare & Beauty Lover</p>
                    <p className="text-md lg:text-lg tracking-wide text-neutral-500 text-center">Contact: da.dahliaa8@gmail.com</p>
                </header>

                {/* Links */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {/* YesStyle */}
                    <a
                        href="https://ystyle.co/1FTE"
                        target="_blank"
                        className="group flex flex-col relative overflow-hidden bg-white/5 backdrop-saturate-[1.8] backdrop-blur-lg shadow-lg rounded-lg border border-neutral-300/50 box-border transition-all ease-in-out duration-300 hover:scale-105"
                    >
                        <div className="flex p-3 z-10 w-full justify-start items-center rounded-t-lg gap-2 pb-3">
                            <div className="flex justify-center items-center p-2 rounded-full text-pink-500 bg-pink-500/20">
                                <ShoppingCart size={16} />
                            </div>
                            <p className="tracking-widest text-neutral-500 italic text-sm lg:text-md">5% OFF at YesStyle: WER0090</p>
                        </div>
                    </a>

                    {/* Become a influencer */}
                    <a
                        href="https://www.yesstyle.com/en/influencers.html?irirco=WER0090&utm_term=WER0090&utm_medium=infreferral&mcg=influencer&utm_source=influencer&utm_campaign=iriprivate"
                        target="_blank"
                        className="group flex flex-col relative overflow-hidden bg-white/5 backdrop-saturate-[1.8] backdrop-blur-lg shadow-lg rounded-lg border border-neutral-300/50 box-border transition-all ease-in-out duration-300 hover:scale-105"
                    >
                        <div className="flex p-3 z-10 w-full justify-start items-center rounded-t-lg gap-2 pb-3">
                            <div className="flex justify-center items-center p-2 rounded-full text-pink-500 bg-pink-500/20">
                                <Account size={16} />
                            </div>
                            <p className="tracking-widest text-neutral-500 italic text-sm lg:text-md">Become YesStyle Influencer</p>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/w_pawelczyk/"
                        target="_blank"
                        className="group flex flex-col relative overflow-hidden bg-white/5 backdrop-saturate-[1.8] backdrop-blur-lg shadow-lg rounded-lg border border-neutral-300/50 box-border transition-all ease-in-out duration-300 hover:scale-105"
                    >
                        <div className="flex p-3 z-10 w-full justify-start items-center rounded-t-lg gap-2 pb-3">
                            <div className="flex justify-center items-center p-2 rounded-full text-pink-500 bg-pink-500/20">
                                <Instagram size={16} />
                            </div>
                            <p className="tracking-widest text-neutral-500 italic text-sm lg:text-md">Instagram</p>
                        </div>
                    </a>

                    {/* TikTok */}
                    <a
                        href="https://www.instagram.com/w_pawelczyk/"
                        target="_blank"
                        className="group flex flex-col relative overflow-hidden bg-white/5 backdrop-saturate-[1.8] backdrop-blur-lg shadow-lg rounded-lg border border-neutral-300/50 box-border transition-all ease-in-out duration-300 hover:scale-105"
                    >
                        <div className="flex p-3 z-10 w-full justify-start items-center rounded-t-lg gap-2 pb-3">
                            <div className="flex justify-center items-center p-2 rounded-full text-pink-500 bg-pink-500/20">
                                <Tiktok size={16} />
                            </div>
                            <p className="tracking-widest text-neutral-500 italic text-sm lg:text-md">TikTok</p>
                        </div>
                    </a>
                </section>
            </div>
        </main>
    )
}
