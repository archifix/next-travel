import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

export const metadata = {
  title: "Travel",
  description: "Travel on the Kavkaz",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
