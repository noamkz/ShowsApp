import {Navigation} from 'react-native-navigation';

// מסכי ניווט
const Routes = (ScreenId, show) => {
  Navigation.push(ScreenId, {
    component: {
      name: `screens.ShowScreen`,
      passProps: {
        id: show.id,
      },
      options: {
        topBar: {
          title: {
            text: show.title,
          },
        },
      },
    },
  });
};

export default Routes;
