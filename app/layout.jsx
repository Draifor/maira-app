import "./globals.css"
import Header from "./components/Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  )
}
