import {View} from 'react-native';
import Header from './Header';
import './App.scss';
import CurrentlyReading from './currently-reading/CurrentlyReading';
import StatusUpdate from './status-update/StatusUpdate';
import ElementTitle from './core/ElementTitle';
import WantToRead from './core/WantToRead';

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
            <ElementTitle title="STATUS"/>
            <StatusUpdate className="mb-4" />
            <ElementTitle title="UPDATES"/>
            <WantToRead name="JANE"></WantToRead>
          </View>
          <View style={{flex: 0.3, paddingLeft: '2rem'}}>
            <ElementTitle title="RECOMMENDED"/>
          </View>
        </View>
      </div>
    </div>
  );
};

export default App;