import Header from "@/component/Header";
import Footer from "@/component/Footer";
import "./globals.css";
import "./responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "SVPL Solar",
  description: "SVPL Solar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
