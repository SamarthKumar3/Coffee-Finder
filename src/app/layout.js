import './globals.css'


export const metadata = {
  title: 'Coffee Locator',
  description: 'Grab your nearest coffee',
}

export default function RootLayout({ children }) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <html lang="en" >
      <body >
        {children}
        {/* <footer>
          {year} Samarth
        </footer> */}
      </body>
    </html>
  )
}
