import { Component } from 'react';
import getAxiosTag from '../servise/Api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    listImages: [],
    searchImage: '',
    page: 1,
    loading: false,
    // filter: '',
  };
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
  async componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.searchImage);
    console.log(this.props.searchImage);
    console.log(prevProps.searchImage !== this.props.searchImage);
    if (prevProps.searchImage !== this.props.searchImage)
      this.setState({ loading: true });
    try {
      const listImages = await getAxiosTag(this.props.searchImage);
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
    const { listImages } = this.state;
    return (
      <ul>
        {listImages.map(dataImage => {
          return <ImageGalleryItem key={dataImage.id} dataImage={dataImage} />;
        })}
      </ul>
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
