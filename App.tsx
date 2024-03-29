import React from 'react';
import {
  SafeAreaView, 
  Text,
  useColorScheme
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    
     <Text testID='devTex' >
       dev
     </Text>
    </SafeAreaView>
  );
};


export default App;
