import { Playfair_Display, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Résidence Rincón d'Alicia",
  description: "Des appartements, studios et chambres meublés alliant confort, élégance et tranquillité pour vos courts et longs séjours à Dakar (Sénégal).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main style={{ flex: 1, paddingTop: "80px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
