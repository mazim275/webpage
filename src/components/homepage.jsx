


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './homepage.css';
import Navbar from './navbar.jsx';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      if (res) {
        setData(res.data.products);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const result = data.filter((pro) =>
      pro.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(result);
  }, [input, data]);

  return (
    <div>
      <Navbar input={input} setInput={setInput} />
      <div className='main'>
        {filteredData.map((val, index) => (
          <div
            className='card'
            key={val.id}
            onClick={() => navigate(`/about/${val.id}`)}
          >
            <img src={val.thumbnail} alt={val.title} />
            <h3>{val.title}</h3>
            <p>${val.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

