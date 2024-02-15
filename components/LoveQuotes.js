// LoveQuotes.js
import React from 'react';
import { View, Text } from 'react-native';

const LoveQuotes = () => {
  const quotes = [
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    // Add more quotes as needed
  ];

  return (
    <View>
      <Text>Love Quotes:</Text>
      {quotes.map((quote, index) => (
        <Text key={index}>{quote}</Text>
      ))}
    </View>
  );
};

export default LoveQuotes;
