import React from 'react';

import { Layout, SEO } from '../components';
import products from '../data/products.json';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="py-12 text-gray-800">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <a href="#">
                <h3>{product.name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
