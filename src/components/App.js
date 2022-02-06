import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import getAxiosTag from './service/ApiImage';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { GlobalStyle } from './GlobalSyle';
import { SpinnerWrepper } from './Loader/Loader.styled';
import { Container } from './App.styled';
export function App() {
  const [listImages, setListImages] = useState([]);
  const [searchImage, setSearchImage] = useState('');
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (searchImage === '') {
      return;
    }
    const getAxioslistImages = async () => {
      setIsLoading(true);
      try {
        const data = await getAxiosTag(searchImage, page);
        setListImages(listImages => [...listImages, ...data.hits]);
        setIsLoading(false);
        if (page !== 1) {
          scrollBy();
        }
        if (data.totalHits === 0) {
          toast.warn('Cannot find your request!');
        }
        if (data.totalHits !== 0 && page === 1) {
          toast.warn(`Hoooray! We search ${data.totalHits} images `);
        }
        if (page > data.totalHits / 12 && data.totalHits !== 0) {
          toast.warn('You reach end of search!');
          return setHasMore(false);
        }
      } catch (error) {
        toast.warn('sorry, try again later');
      }
    };
    getAxioslistImages();
  }, [searchImage, page]);

  const scrollBy = () => {
    window.scrollBy({
      top: 600,
      behavior: 'smooth',
    });
  };
  const handleLoadMore = () => {
    setPage(page => page + 1);
  };
  const handleSearchBar = imageName => {
    setSearchImage(imageName);
    setListImages([]);
    setPage(1);
  };
  const selectImages = (largeImageURL, showModal) => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Searchbar onSearch={handleSearchBar} />
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
          <ImageGallery listImages={listImages} onSelectImages={selectImages} />
        )}
        {hasMore && listImages.length > 0 && (
          <Button type="button" loadMore={handleLoadMore} />
        )}
        {showModal && (
          <Modal onClose={closeModal}>
            <img src={largeImageURL} alt={'tag'} />
          </Modal>
        )}
        <ToastContainer position="top-center" autoClose={2000} />
      </Container>
    </>
  );
}
