import React, {Component} from 'react';
import SearchBar from 'react-native-material-design-searchbar';

// אובייקט חיפוש
class SearchView extends Component {
  render() {
    return (
      <SearchBar
        onSearchChange={text => {
          if (text.length != 0) {
            // אם ריק אז מציג את הרשימה ההתחלתית
            fetch('http://api.tvmaze.com/search/shows?q=' + text)
              .then(response => response.json())
              .then(shows => {
                let showsJson = shows.map(show => {
                  return {
                    id: show.show.id,
                    image:
                      show.show.image == null
                        ? 'https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png'
                        : show.show.image.medium,
                    title: show.show.name,
                    rating: show.show.rating.average,
                  };
                });
                if (showsJson.length != 0) this.props.setListSearch(showsJson);
                // אם לא נמצא תן התראה, ניתן לשפר
                else alert('not found match');
              })
              .catch(error => alert('error: ' + error));
          } else {
            this.props.rest();
          }
        }}
        height={50}
        placeholder={'Search Show...'}
        autoCorrect={false}
        padding={5}
        returnKeyType={'search'}
      />
    );
  }
}
export default SearchView;
