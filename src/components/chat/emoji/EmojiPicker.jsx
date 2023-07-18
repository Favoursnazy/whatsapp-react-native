import {memo, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import categories from '../../../data/categories';
import EmojiCategory from './EmojiCategory';
import Tabar from './Tabar';

const EmojiPicker = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(
    categories.tabs.map(tab => ({key: tab.category, title: tab.tabLabel})),
  );

  const renderScence = ({route}) => <EmojiCategory category={route.key} />;

  return (
    <TabView
      renderTabBar={props => <Tabar setIndex={setIndex} {...props} />}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScence}
      initialLayout={{width: layout.width}}
    />
  );
};

export default memo(EmojiPicker);
