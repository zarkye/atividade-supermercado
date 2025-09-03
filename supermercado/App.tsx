import Toast from 'react-native-toast-message';
import Home from './src/screens/Home';
import { toastConfig } from './src/ui/toastConfig';


export default function App() {
  return (
    
    <>
      <Home />
      <Toast config={toastConfig} position="top" topOffset={67} />
    </>
  );
};

