import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"

const rubik = Rubik({ subsets: ["latin"] })

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
                className={`${rubik.className} antialiased`}
            >
                <div className="w-full min-h-dvh bg-pink-200" data-pattern="grid">
                    {children}
                </div>
            </body>
        </html>
    )
}
