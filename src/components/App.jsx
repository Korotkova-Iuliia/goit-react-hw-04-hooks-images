import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import getAxiosTag from './servise/Api';
import ImageGallery from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    // listImages: [],
    searchImage: '',
    page: 1,
    loading: false,
    // filter: '',
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   try {
  //     const listImages = await getAxiosTag();
  //     this.setState({
  //       listImages: listImages.hits,
  //       loading: false,
  //     });
  //     console.log(listImages);
  //     console.log(listImages.hits);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevProps);
  //   if (this.state.searchImage !== prevState.searchImage)
  //     console.log(this.state.searchImage);
  //   console.log(prevState.searchImage);

  //   console.log(this.state);
  // }
  handleSearchBar = imageName => {
    this.setState({ searchImage: imageName });
    console.log(imageName);
  };
  render() {
    const { loading } = this.state;

    return (
      <>
        <Searchbar onSearch={this.handleSearchBar} />
        <Button onChange={this.inputTagImage} />
        {loading && <h1>load</h1>}
        <ImageGallery
          // listImages={listImages}
          searchImage={this.state.searchImage}
        />
        <ToastContainer position="top-center" autoClose={2000} />
      </>
    );
  }
}
// {
//   /* // <ImageGallery /> */
// }
// default App;
// key=24377768-1651c24dae1d00899e27f41ae
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// https://pixabay.com/api/?q=cat&page=1&key=24377768-1651c24dae1d00899e27f41ae&image_type=photo&orientation=horizontal&per_page=12
