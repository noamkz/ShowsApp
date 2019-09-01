import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {View, Spinner} from 'native-base';
import Footer from '../../Components/Footer/footer';
import showView from '../../Components/Show/showView';

// מסך פרטי סדרה
class ShowScreen extends Component {
  state = {card: null};

  // יבוא סדרה אם המספר המזהה שנבחר
  componentDidMount() {
    fetch('http://api.tvmaze.com/shows/' + this.props.id)
      .then(response => response.json())
      .then(show => {
        //  alert(JSON.stringify(show));
        showV = showView(show);

        this._asyncRequest = null;
        this.setState({card: showV});
      })
      .catch(error => alert('error: ' + error));
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {this.state.card == null ? <Spinner color="blue" /> : this.state.card}
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
export default ShowScreen;
