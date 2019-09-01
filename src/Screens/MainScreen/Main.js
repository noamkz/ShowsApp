import React, {Component} from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import {Container, Content, View, Spinner} from 'native-base';
import Footer from '../../Components/Footer/footer';
import Card from '../../Components/Card/card';
import SearchBar from '../../Components/Search/search';
import routes from '../../Routes/routes';

//מסך ראשי

class MainScreen extends Component {
  state = {listShow: undefined, search: null, start: null};
  //מיבא את רשימת הסדרות לראשונה
  componentDidMount() {
    fetch('http://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(shows => {
        const showsJson = shows.map(show => {
          return {
            id: show.id,
            image: show.image.medium,
            title: show.name,
            rating: show.rating.average,
          };
        });
        this._asyncRequest = null;
        this.setState({listShow: showsJson, start: showsJson});
      })
      .catch(error => alert('error: ' + error));
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }
  // רינדור כל סדרה למסך
  _renderItem = ({item}) => (
    <TouchableHighlight onPress={() => routes(this.props.componentId, item)}>
      {Card(item)}
    </TouchableHighlight>
  );

  // רשימה החוזרת מהחיפוש
  setListSearch = list => {
    this.setState({listShow: list});
  };
  rest = () => {
    this.setState({listShow: this.state.start});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Container>
          <SearchBar setListSearch={this.setListSearch} rest={this.rest} />
          <Content>
            <View>
              {this.state.listShow == undefined ? (
                <Spinner color="blue" />
              ) : (
                <FlatList
                  maxToRenderPerBatch={3}
                  data={this.state.listShow}
                  extraData={this.state}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                  updateCellsBatchingPeriod={100}
                />
              )}
            </View>
          </Content>
          <Footer />
        </Container>
      </View>
    );
  }
}
export default MainScreen;
