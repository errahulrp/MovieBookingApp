
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ConfirmationPage from './ConfirmationPage';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    mobile: '',
  });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '', 
    });
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

 
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number (10 digits required)';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  }

  const handleBookTicket = () => {
    if (validateForm()) {
      // Implement your booking logic here
      // For now, just set isBooked to true
      setIsBooked(true);
    }
  }

  return (
    <div>
      {isBooked ? (
        <ConfirmationPage bookedShow={show} />
      ) : (
        <div className="max-w-4xl mx-auto mt-8 p-8 bg-gradient-to-br to-[#ffecd1] from-[#ff7d00] rounded shadow-2xl">
          <h1 className="text-4xl font-bold mb-4">{show ? show.name : 'Loading...'}</h1>
          <div className='flex gap-28'>
            {show && (
              <div>
                <img src={show.image ? show.image.medium : ''} alt={show.name} className="rounded-lg mb-4" />
                <p className="mb-4">{show.language}</p>
              </div>
            )}

            {/* Movie Booking Form */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Movie Booking Form</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className={`mt-1 p-2 w-60 border rounded-md outline-none ${formErrors.name && 'border-red-500'}`} onChange={handleInputChange} required />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="text" id="mobile" name="mobile" className={`mt-1 p-2 w-60 border rounded-md outline-none ${formErrors.mobile && 'border-red-500'}`} onChange={handleInputChange} required />
                  {formErrors.mobile && <p className="text-red-500 text-sm mt-1">{formErrors.mobile}</p>}
                </div>
                <button type="button" onClick={handleBookTicket} className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowSummary;
