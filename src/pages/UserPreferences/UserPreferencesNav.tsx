import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '@/assets/arrow-up-right.svg'; // ✅ Import the image

type Props = {};

const UserPreferencesNav = (props: Props) => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/user-dashboard');
  };

  return (
    <div className="flex items-center justify-between p-4 mb-6 w-full">
      <span>
        <h2 className='text-2xl font-bold'>Preferences</h2>
        <div>Select your preferred simulation topics</div>
      </span>
      <span>
        <button
          onClick={handleGoToDashboard}
          className="px-4 py-2 bg-black  text-white hover:bg-black transition rounded-lg w-full flex items-center justify-center"
        >
          Go to Dashboard
          <img
            src={arrowIcon}
            className="img-fluid rounded-top ml-2 "
            alt=""
          />

        </button>
      </span>
    </div>
  );
};

export default UserPreferencesNav;
