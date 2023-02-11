import '@testing-library/jest-dom';
import Footer from '../Footer';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import UserContext from '../../utils/UserContext';

test('Footer should have a content when loading on initial render', () => {
  // footer load

  const user = {
    name: 'Tonny',
    email: 'tonny@gmail.com',
  };

  const footer = render(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <Footer />
    </UserContext.Provider>
  );

  const footerContent = footer.getByTestId('footer-content');

  console.log(footerContent.innerHTML);

  expect(footerContent).toBeInTheDocument();

  // check footer have content
//   expect(footerContent.innerHTML).toBe('Footer - Tonny - tonny@gmail.com');
});
