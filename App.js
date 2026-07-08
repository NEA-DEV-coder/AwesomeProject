import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={globalStyle.header}>
          <Title title={"Let's Explore"} />
          <TouchableOpacity style={globalStyle.messageIcon}>
            <FontAwesomeIcon color={'#898dae'} size={20} icon={faEnvelope} />
            <View style={globalStyle.messageNumberContainer}>
              <Text style={globalStyle.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
