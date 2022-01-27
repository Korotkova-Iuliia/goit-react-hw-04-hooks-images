import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import getAxiosTag from './servise/ApiImage';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { GlobalStyle } from './GlobalSyle';
import { SpinnerWrepper } from './Loader/Loader.styled';
import { Container } from './App.styled';
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
    if (prevState.searchImage !== searchImage && listImages.length > 0) {
      this.setState({ listImages: [] });
    }
    if (prevState.searchImage !== searchImage || prevState.page !== page) {
      return this.getAxioslistImages();
    }
    if (prevState.listImages.length && listImages.length > 0) {
      this.scrollBy();
    }
  }
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
      const data = await getAxiosTag(searchImage, page);
      this.setState(prevState => ({
        listImages: [...prevState.listImages, ...data.hits],
        isLoading: false,
      }));
      if (data.totalHits === 0) {
        toast.warn('Cannot find your request!');
      }
      if (page > data.totalHits / 12 && data.totalHits !== 0) {
        toast.warn('You reach end of search!');
      }
      if (data.totalHits !== 0 && page === 1) {
        toast.warn(`Hoooray! We search ${data.totalHits} images `);
      }
      return;
    } catch (error) {
      toast.warn('sorry, try again later');
    }
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleSearchBar = imageName => {
    this.setState({ searchImage: imageName });
  };
  selectImages = (largeImageURL, tags, showModal) => {
    this.setState({ largeImageURL, tags, showModal: !showModal });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { isLoading, listImages, largeImageURL, tags, showModal, page } =
      this.state;
    const countImage = listImages.length;
    const countPage = countImage / 12;
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
          {page === countPage && countImage > 0 && (
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
