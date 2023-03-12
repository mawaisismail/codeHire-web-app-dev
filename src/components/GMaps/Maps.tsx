// import styles from "./Maps.module.scss";
// import { useEffect } from "react";
//
// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
//
// export const Maps = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDzU9d3kECGb2Maa_mjQ1c-ofry-PMevd4`;
//     script.defer = true;
//     script.onload = () => {
//       window.initMap = () => {
//         const uluru = { lat: -25.344, lng: 131.031 };
//         const map = new google.maps.Map(
//           document.getElementById("map") as HTMLElement,
//           {
//             zoom: 4,
//             center: uluru,
//           }
//         );
//
//         const marker = new google.maps.Marker({
//           position: uluru,
//           map: map,
//         });
//       };
//     };
//     document.body.appendChild(script);
//   }, []);
//
//   return <div className={styles.Maps} id="map" onLoad={window.initMap}></div>;
// };
