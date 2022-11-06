import { NativeBaseProvider, StatusBar } from 'native-base';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { THEME } from "./src/styles/themes";
import Loading from "./src/components/Loading";
import { AuthContextProvider } from './src/contexts/AuthContext';
import Signin from "./src/screens/Signin";
import CreatePool from './src/screens/CreatePool';
import FindPool from './src/screens/FindPool';
import SearchPools from './src/screens/SearchPools';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Signin /> : <CreatePool />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
