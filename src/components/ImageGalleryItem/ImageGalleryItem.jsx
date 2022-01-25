const ImageGalleryItem = ({ dataImage: { previewURL, tags } }) => {
  return (
    <li>
      <img src={previewURL} alt={tags} />
    </li>
  );
};
export default ImageGalleryItem;
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
