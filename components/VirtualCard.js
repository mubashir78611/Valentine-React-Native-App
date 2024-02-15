// VirtualCard.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const VirtualCard = () => {
  const [message, setMessage] = useState('');

  const handleCreateCard = () => {
    // Implement logic to send the virtual card with the entered message
    // For simplicity, you can just log the message to the console
    console.log(`Virtual Card Message: ${message}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your message"
        onChangeText={(text) => setMessage(text)}
        value={message}
      />
      <Button title="Create Virtual Card" onPress={handleCreateCard} />
    </View>
  );
};

export default VirtualCard;
