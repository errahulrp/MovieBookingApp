import React from 'react';

const ConfirmationPage = ({ bookedShow }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gradient-to-br to-[#ffecd1] from-[#ff7d00] rounded shadow-2xl">
      <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
      {bookedShow && (
        <div>
          <p className="mb-4">You have successfully booked a ticket for {bookedShow.name}.</p>
          <p>Thank you for choosing our service!</p>
        </div>
      )}
    </div>
  );
}

export default ConfirmationPage;
