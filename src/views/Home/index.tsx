import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

interface IProducts {
  id: number;
  name: string;
  price: number;
  image: string;
  offer: boolean;
  category: number[];
  description: string;
  discount: number;
}

const Home: React.FC = () => {
  const [list, setList] = useState<IProducts[]>([]);

  useEffect(() => {
    api
      .get('products')
      .then((r) => setList(r.data))
      .catch((e) => console.error(e));
  }, []);

  console.log(list);

  return (
    <div className="card">
      <p>Home</p>
      {list?.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <h3>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(item.price)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
