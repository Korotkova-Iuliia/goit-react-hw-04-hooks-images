import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import getAxiosTag from './servise/Api';
// import getAxiosTag from './servise/Api';
export class App extends Component {
  state = {
    listImages: [],
    searchImage: '',
    page: 1,
    // filter: '',
  };
  async componentDidMount() {
    try {
      const data = await getAxiosTag();
      console.log(data);
      console.log(data.hits);
      //  this.setState({ isLoading: true });
      //  const items = await getPublications();
      //  this.setState({ isLoading: false, items });
    } catch (error) {
      console.log(error);
    }
  }
  inputTagImage = e => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <>
        'afegrdrh'
        <Searchbar />
        {/* // <ImageGallery /> */}
        <Button onChange={this.inputTagImage} />
      </>
    );
  }
}
// default App;
// key=24377768-1651c24dae1d00899e27f41ae
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// https://pixabay.com/api/?q=cat&page=1&key=24377768-1651c24dae1d00899e27f41ae&image_type=photo&orientation=horizontal&per_page=12
