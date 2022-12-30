import 'react-native-gesture-handler';
import "./ignoreWarning";
import {View } from 'react-native';
import {Provider} from 'react-redux';
import {QueryClientProvider,QueryClient} from 'react-query';
import store  from './src/redux/store';
import AppNavigation from './AppNavigation';

export default function App() {
//   SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
    <View style={{flex:1}}>
      <AppNavigation/>
    </View>
    </Provider>
    </QueryClientProvider>
  );
}


