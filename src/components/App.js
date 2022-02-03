import { useState, useEffect } from 'react';
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
export function App() {
  const [listImages, setListImages] = useState([]);
  const [searchImage, setSearchImage] = useState('');
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const getAxioslistImages = async () => {
    // const { searchImage, page } = this.state;
    // this.setState({ isLoading: true });
    setIsLoading(true);
    try {
      const data = await getAxiosTag(searchImage, page);
      setListImages([...listImages, ...data.hits]);
      setIsLoading(false);
      if (data.totalHits === 0) {
        toast.warn('Cannot find your request!');
      }
      if (page > data.totalHits / 12 && data.totalHits !== 0) {
        toast.warn('You reach end of search!');
        setHasMore(false);
      }
      if (data.totalHits !== 0 && page === 1) {
        toast.warn(`Hoooray! We search ${data.totalHits} images `);
      }
      return;
    } catch (error) {
      toast.warn('sorry, try again later');
    }
  };
  useEffect(() => {
    setListImages([]);
    setPage(1);
    getAxioslistImages();
  }, [searchImage]);
  useEffect(() => {
    setListImages([]);
    setPage([1]);
    scrollBy();
    // if (listImages.length > 0) {
    //   setListImages([]);
    //   setPage([1]);
    //   scrollBy();
    //   // this.setState({ listImages: [], page: 1 });
    // }
    const getAxioslistImages = async () => {
      // const { searchImage, page } = this.state;
      // this.setState({ isLoading: true });
      setIsLoading(true);
      try {
        const data = await getAxiosTag(searchImage, page);
        setListImages([...listImages, ...data.hits]);
        setIsLoading(false);
        if (data.totalHits === 0) {
          toast.warn('Cannot find your request!');
        }
        if (page > data.totalHits / 12 && data.totalHits !== 0) {
          toast.warn('You reach end of search!');
          setHasMore(false);
        }
        if (data.totalHits !== 0 && page === 1) {
          toast.warn(`Hoooray! We search ${data.totalHits} images `);
        }
        return;
      } catch (error) {
        toast.warn('sorry, try again later');
      }
    };
    // if (prevState.searchImage !== searchImage || prevState.page !== page) {
    //   this.getAxioslistImages();
    // }
  }, [listImages, page, searchImage]);

  // componentDidUpdate(_, prevState) {
  //   // const { listImages, searchImage, page } = this.state;
  //   if (prevState.searchImage !== searchImage && listImages.length > 0) {
  //     setListImages([]);
  //     setPage([1])
  //     // this.setState({ listImages: [], page: 1 });
  //   }

  //   if (prevState.searchImage !== searchImage || prevState.page !== page) {
  //     this.getAxioslistImages();
  //   }
  //   if (prevState.listImages.length > 0 && listImages.length > 0) {
  //     this.scrollBy();
  //   }
  // }
  const scrollBy = () => {
    window.scrollBy({
      top: 600,
      behavior: 'smooth',
    });
  };

  const handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  const handleSearchBar = imageName => {
    setSearchImage(imageName);
  };
  const selectImages = (largeImageURL, tags, showModal) => {
    setLargeImageURL(largeImageURL);
    //  setTags(tags);
    setShowModal(!showModal);
    // this.setState({ largeImageURL, tags, showModal: !showModal });
  };
  const closeModal = () => {
    setShowModal(!false);
    // this.setState({ showModal: false });
  };

  // const { isLoading, listImages, largeImageURL, tags, showModal, hasMore } =
  //   this.state;
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
            <img src={largeImageURL} alt={'tags'} />
          </Modal>
        )}
        <ToastContainer position="top-center" autoClose={2000} />
      </Container>
    </>
  );
}
// export class App extends Component {
//   state = {
//     listImages: [],
//     searchImage: '',
//     page: 1,
//     isLoading: false,
//     largeImageURL: null,
//     showModal: false,
//     hasMore: true,
//   };
//   componentDidUpdate(_, prevState) {
//     const { listImages, searchImage, page } = this.state;
//     if (prevState.searchImage !== searchImage && listImages.length > 0) {
//       this.setState({ listImages: [], page: 1 });
//     }

//     if (prevState.searchImage !== searchImage || prevState.page !== page) {
//       this.getAxioslistImages();
//     }
//     if (prevState.listImages.length > 0 && listImages.length > 0) {
//       this.scrollBy();
//     }
//   }
//   scrollBy = () => {
//     window.scrollBy({
//       top: 600,
//       behavior: 'smooth',
//     });
//   };
//   getAxioslistImages = async () => {
//     const { searchImage, page } = this.state;
//     this.setState({ isLoading: true });
//     try {
//       const data = await getAxiosTag(searchImage, page);
//       this.setState(prevState => ({
//         listImages: [...prevState.listImages, ...data.hits],
//         isLoading: false,
//       }));
//       if (data.totalHits === 0) {
//         toast.warn('Cannot find your request!');
//       }
//       if (page > data.totalHits / 12 && data.totalHits !== 0) {
//         toast.warn('You reach end of search!');
//         this.setState({ hasMore: false });
//       }
//       if (data.totalHits !== 0 && page === 1) {
//         toast.warn(`Hoooray! We search ${data.totalHits} images `);
//       }
//       return;
//     } catch (error) {
//       toast.warn('sorry, try again later');
//     }
//   };
//   handleLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   handleSearchBar = imageName => {
//     this.setState({ searchImage: imageName });
//   };
//   selectImages = (largeImageURL, tags, showModal) => {
//     this.setState({ largeImageURL, tags, showModal: !showModal });
//   };
//   closeModal = () => {
//     this.setState({ showModal: false });
//   };
//   render() {
//     const { isLoading, listImages, largeImageURL, tags, showModal, hasMore } =
//       this.state;
//     return (
//       <>
//         <GlobalStyle />
//         <Container>
//           <Searchbar onSearch={this.handleSearchBar} />
//           {isLoading && (
//             <SpinnerWrepper>
//               <Oval
//                 ariaLabel="isLoading-indicator"
//                 height={70}
//                 width={70}
//                 strokeWidth={4}
//                 color="gray"
//                 secondaryColor="yellow"
//               />
//             </SpinnerWrepper>
//           )}
//           {listImages.length > 0 && (
//             <ImageGallery
//               listImages={listImages}
//               onSelectImages={this.selectImages}
//             />
//           )}
//           {hasMore && listImages.length > 0 && (
//             <Button type="button" loadMore={this.handleLoadMore} />
//           )}
//           {showModal && (
//             <Modal onClose={this.closeModal}>
//               <img src={largeImageURL} alt={tags} />
//             </Modal>
//           )}
//           <ToastContainer position="top-center" autoClose={2000} />
//         </Container>
//       </>
//     );
//   }
// }
