/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header';
import { Footer } from './footer';

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white border-t-4 border-teal-500">
      <Header />
      <main className="flex-1 w-full max-w-3xl px-6 mx-auto lg:max-w-7xl">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
