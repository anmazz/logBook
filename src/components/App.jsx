import {View} from 'react-native';
import Header from './Header';
import './App.scss';
import CurrentlyReading from './currently-reading/CurrentlyReading';
import StatusUpdate from './status-update/StatusUpdate';

const App = () => {
  return (
    <div>
      <Header />
      <div className='p-3'></div>
      <div className="column-container">
        <View
          style={{
            flexDirection: 'row',
            height: 300
          }}>
          <View style={{flex: 0.3}}>
            <CurrentlyReading />
          </View>
          <View style={{flex: 0.4}}>
            <StatusUpdate />
          </View>
          <View style={{backgroundColor: 'lightblue', flex: 0.3}} />
        </View>
      </div>
    </div>
  );
};

export default App;