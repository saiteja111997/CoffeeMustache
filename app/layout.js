import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-offwhite text-brown">
        {children}
      </body>
    </html>
  );
}
