/*
המטלה הוכנה רק לאנדרויד אך במידה וצריך אין לי בעיה להוסיף גם לאייפון
וגם ללא רידקס, לא באמת היה צורך 
*/

// רישות מסכים
import {Navigation} from 'react-native-navigation';
import App from './src/Screens/MainScreen/Main';
import ShowScreen from './src/Screens/ShowScreen/Show';
import {YellowBox} from 'react-native';

Navigation.registerComponent(`screens.ShowScreen`, () => ShowScreen);
Navigation.registerComponent(`screens.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'screens.WelcomeScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Main Screen',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
// התעלמות מהערות מערכת אשר נובים מהגרסא החדשה
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: Each',
  'Warning: Failed',
]);
