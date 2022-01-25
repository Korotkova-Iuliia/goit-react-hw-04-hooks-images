import { Component } from 'react';
import getAxiosTag from '../servise/Api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    listImages: [],
    searchImage: '',
    page: 2,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchImage } = this.props;
    const { page } = this.state;
    console.log(prevProps.searchImage);
    console.log(page);
    console.log(searchImage);
    console.log(prevProps.searchImage !== searchImage);
    if (prevProps.searchImage !== searchImage) this.setState({ loading: true });
    try {
      const listImages = await getAxiosTag(searchImage, page);
      this.setState({
        listImages: listImages.hits,
        loading: false,
      });
      console.log(listImages);
      console.log(listImages.hits);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { listImages, loading } = this.state;

    return (
      <>
        {loading && <h1>load</h1>}
        <ul>
          {listImages.map(dataImage => {
            return (
              <ImageGalleryItem key={dataImage.id} dataImage={dataImage} />
            );
          })}
        </ul>
      </>
    );
  }
}
export default ImageGallery;

// const ImageGallery = ({ listImages }) => {
//   return (
//     <ul>
//       {listImages.map(dataImage => {
//         return <ImageGalleryItem key={dataImage.id} dataImage={dataImage} />;
//       })}
//     </ul>
//   );
// };
// export default ImageGallery;
// // return <ImageGalleryItem key={dataImage.id} dataImage={dataImage} />;

//   async componentDidMount() {
//     this.setState({ loading: true });
//     try {
//       const listImages = await getAxiosTag(this.state.searchImage);
//       this.setState({
//         listImages: listImages.hits,
//         loading: false,
//       });
//       console.log(listImages);
//       console.log(listImages.hits);
//     } catch (error) {
//       console.log(error);
//     }
//   }
