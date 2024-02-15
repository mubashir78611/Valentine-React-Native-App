// // App.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import CountdownTimer from './components/CountdownTimer';
// import LoveQuotes from './components/LoveQuotes';
// import VirtualCard from './components/VirtualCard';

// const targetDate = new Date('2024-02-14T00:00:00');

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <CountdownTimer targetDate={targetDate} />
//       <LoveQuotes />
//       <VirtualCard />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;



import React from 'react';
import HeartAnimation from './HeartAnimation';

const App = () => {
  return <HeartAnimation />;
};

export default App;
