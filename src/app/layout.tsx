import type { Metadata } from "next"
import { Andika } from "next/font/google"
import "./globals.css"

const andika = Andika({
    weight: ["400", "700"],
    style: ["normal",  "italic"],
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Weroniczka links",
    description: "Linktree for Weroniczka",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${andika.className} antialiased`}
            >
                <div className="w-full min-h-dvh bg-pink-200" data-pattern="dots">
                    {children}
                </div>
            </body>
        </html>
    )
}
