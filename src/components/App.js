import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import getAxiosTag from './servise/ApiImage';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalSyle';
import { Container } from './App.styled';

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
    page: 1,
    isLoading: false,
    largeImageURL: null,
    showModal: false,
    hasMore: true,
  };
  componentDidUpdate(prevProps, prevState) {
    const { listImages, searchImage, page } = this.state;

    console.log(prevState.searchImage);
    console.log(searchImage);
    console.log(prevState.searchImage === searchImage);
    console.log(listImages.length > 0);
    console.log(listImages.length);
    if (prevState.searchImage !== searchImage && listImages.length > 0) {
      this.setState({ listImages: [] });
    }
    if (prevState.searchImage !== searchImage || prevState.page !== page) {
      return this.getAxioslistImages();
    }
    if (prevState.listImages.length && listImages.length > 0) {
      // this.scrollToBottom();
      this.scrollBy();
    }
  }

  // scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };
  scrollBy = () => {
    window.scrollBy({
      top: 600,
      behavior: 'smooth',
    });
  };

  getAxioslistImages = async () => {
    const { searchImage, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const listImages = await getAxiosTag(searchImage, page);
      this.setState(prevState => ({
        listImages: [...prevState.listImages, ...listImages.hits],
        isLoading: false,
      }));
      if (listImages.hits.length === 0) {
        return toast.warn('Cannot find your request!');
      }
      console.log(listImages.hits);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleSearchBar = imageName => {
    const { searchImage } = this.state;
    console.log(imageName);
    console.log(searchImage);
    this.setState({ searchImage: imageName });
  };

  selectImages = (largeImageURL, tags, showModal) => {
    this.setState({ largeImageURL, tags, showModal: !showModal });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { isLoading, listImages, largeImageURL, tags, showModal } =
      this.state;
    return (
      <>
        <GlobalStyle />
        <Container>
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
          {!isLoading && listImages.length > 0 && (
            <Button type="button" loadMore={this.handleLoadMore} />
          )}
          {showModal && (
            <Modal onClose={this.closeModal}>
              <img src={largeImageURL} alt={tags} /> (
              <button type="button">x</button>)
            </Modal>
          )}

          <ToastContainer position="top-center" autoClose={2000} />
        </Container>
      </>
    );
  }
}
