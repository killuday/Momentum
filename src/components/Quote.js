import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuoteContainer, Text } from './QuoteStyles';

const url = 'https://favqs.com/api/qotd';

const Quote = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <QuoteContainer>
        <p>Error: {error.message}</p>
      </QuoteContainer>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <QuoteContainer>
      <Text>{data.quote.body}</Text>
      <Text>-{data.quote.author}</Text>
    </QuoteContainer>
  );
};

export default Quote;
