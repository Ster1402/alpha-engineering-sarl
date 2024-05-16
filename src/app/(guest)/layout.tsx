import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default async function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="relative text-black flex justify-between min-h-screen flex-col sm:justify-start">
        {children}
      </main>
      <Footer />
    </>
  );
}
