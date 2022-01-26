import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import getAxiosTag from './servise/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import styled from 'styled-components';

const SpinnerWrepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
`;
export class App extends Component {
  state = {
    listImages: [],
    searchImage: '',
    page: 2,
    isLoading: false,
    largeImageURL: null,
    showModal: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searchImage } = this.state;
    const { page } = this.state;
    console.log(prevState.searchImage !== searchImage);
    if (prevState.searchImage !== searchImage) {
      this.setState({ isLoading: true });
      try {
        const listImages = await getAxiosTag(searchImage, page);
        this.setState({
          listImages: listImages.hits,
          isLoading: false,
        });
        console.log(listImages.hits);
        return;
      } catch (error) {
        console.log(error);
      }
    }
  }
  handleLoadMore = () => {
    console.log('sdfargerthaerhd');
  };
  handleSearchBar = imageName => {
    this.setState({ searchImage: imageName });
  };

  // toggleModal = (largeImageURL, tags) => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //     selectImages: largeImageURL,
  //     tags,
  //   }));
  // };
  selectImages = (largeImageURL, tags, showModal) => {
    this.setState({ largeImageURL, tags, showModal: !showModal });
  };
  toggleModal = showModal => {
    this.setState({ showModal: !showModal });
  };
  render() {
    const {
      isLoading,
      searchImage,
      listImages,
      largeImageURL,
      tags,
      showModal,
    } = this.state;
    return (
      <>
        <Searchbar onSearch={this.handleSearchBar} />
        {isLoading && (
          <SpinnerWrepper>
            <Oval
              ariaLabel="isLoading-indicator"
              height={70}
              width={70}
              strokeWidth={4}
              color="gray"
              secondaryColor="yellow"
            />
          </SpinnerWrepper>
        )}
        {listImages.length > 0 && (
          <ImageGallery
            listImages={listImages}
            onSelectImages={this.selectImages}
          />
        )}
        <Button onClick={this.handleLoadMore} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
            <button type="button">x</button>
          </Modal>
        )}

        <ToastContainer position="top-center" autoClose={2000} />
      </>
    );
  }
}
// <Modal
//   url={selectImages}
//   tags={tags}
//   onClose={this.toggleModal}
//   onSelectImage={this.selectImages}
// >

//   {/* <TodoEditor onSubmit={this.addTodo} /> */}
// </Modal>
// {
//   /* // <ImageGallery /> */
// }
// default App;
// key=24377768-1651c24dae1d00899e27f41ae
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// https://pixabay.com/api/?q=cat&page=1&key=24377768-1651c24dae1d00899e27f41ae&image_type=photo&orientation=horizontal&per_page=12
// async componentDidMount() {
//   this.setState({ isLoading: true });
//   try {
//     const listImages = await getAxiosTag();
//     this.setState({
//       listImages: listImages.hits,
//       isLoading: false,
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
