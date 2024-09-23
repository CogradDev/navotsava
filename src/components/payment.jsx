import React from "react";

const Payment = () => {
  return (
    <section className="antialiased py-8 bg-gray-100">
      <div className="container mx-auto grid lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16 px-4 sm:px-6">
        {/* QR Code Section */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center mb-8 lg:mb-0">
          <img
            className="mb-4 h-56 w-56 rounded-xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-full lg:w-full object-cover shadow-lg"
            src="/qr2.jpg"
            alt="QR Code"
          />
          <p className="text-sm text-gray-700 text-center">
            Please share the screenshot of your contribution to
            <span className="font-semibold"> +91-9355605552 (WhatsApp)</span>
            so that we can keep track of it.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight tracking-tight text-gray-900">
            Support Our Cause Today
          </h1>
          <p className="mb-6 text-gray-700 text-center text-lg sm:text-xl">
            Contribute to the <strong>Up State Alumni Meet</strong> and help us
            make a difference. Your donation will ensure the success of our
            initiatives and support the community. Thank you for your
            generosity!
          </p>

          {/* Financial Support Section */}
          <div className="mt-10 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-gray-900">
              Financial Support
            </h2>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">Account Name:</span> NAVODAYA WELFARE
              ASSOCIATION
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">Account Number:</span> 77190100014464
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">IFSC:</span> BARB0VJCAAG
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">Bank:</span> BANK OF BARODA (BOB)
            </p>
            <p className="mb-4 text-gray-700">
              <span className="font-bold">Branch:</span> AGRA CANTONMENT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
