const ImageGalleryItem = ({
  onSelectImage,
  onCick,
  dataImage: { previewURL, largeImageURL, tags },
}) => {
  return (
    <li>
      <img
        src={previewURL}
        alt={tags}
        onClick={() => {
          return onCick();
        }}
        // onClick={() => onSelectImage(largeImageURL, tags)}
      />
    </li>
  );
};
export default ImageGalleryItem;
// const ImageGalleryItem = ({
//   onSelectImage,
//   onCick,
//   dataImage: { previewURL, largeImageURL, tags },
// }) => {
//   return (
//     <li>
//       <img
//         src={previewURL}
//         alt={tags}
//         onClick={() => {
//           onCick();
//           onSelectImage(largeImageURL, tags);
//           return;
//         }}
//         // onClick={() => onSelectImage(largeImageURL, tags)}
//       />
//     </li>
//   );
// };
// export default ImageGalleryItem;
//  <li class="gallery-item">
//         <img src="" alt="" />
//       </li>

// export const VideoList = ({ videos, onSelect }) => {
//   return (
//     <ul>
//       {videos.map(video => (
//         <li key={video.id} onClick={() => onSelect(video.link)}>
//           {video.link}
//         </li>
//       ))}
//     </ul>
//   );
// };
