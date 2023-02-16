import {StyleSheet, View} from 'react-native';
import Header from './Header';
import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <div className="column-container">
        <View
          style={{
            flexDirection: 'row',
            height: 300
          }}>
          <View style={{backgroundColor: 'lightblue', flex: 0.3}}/>
          <View style={{backgroundColor: 'pink', flex: 0.4}} />
          <View style={{backgroundColor: 'lightblue', flex: 0.3}} />
        </View>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;