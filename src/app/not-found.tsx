import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-start h-screen bg-center bg-contain bg-not-found bg-no-repeat pt-8">
        <h1 className="text-4xl text-center font-bold mb-4">
          Sorry,
          <br /> It look like the page has not been Found.
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
