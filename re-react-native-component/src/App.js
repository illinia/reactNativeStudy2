import React from 'react';
import { View } from 'react-native';
import EventInput from './components/EventInput';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <EventInput />
    </View>
  );
};

export default App;