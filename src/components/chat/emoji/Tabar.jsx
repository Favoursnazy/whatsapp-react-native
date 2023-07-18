import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

const Tabar = ({navigationState, position, setIndex}) => {
  const inputRange = navigationState.routes.map((x, i) => i);

  return (
    <View style={styles.container}>
      {navigationState.routes.map((route, index) => {
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex =>
            inputIndex === index ? 1 : 0.5,
          ),
        });
        return (
          <TouchableOpacity
            style={styles.tab}
            key={index}
            onPress={() => setIndex(index)}>
            <Animated.Text style={{opacity, fontSize: 18}}>
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default Tabar;
