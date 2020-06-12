import React from "react";

// export default ({props})=> {
//   return (
// <div className="col-2">
//     <div className="card" style={{margin:"2vw"}}>
//   <img src="..." className="card-img-top" alt="..."/>
//   <div className="card-body">
// <h5 className="card-title">{props.title}</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// </div>
//   );
// };

export default ({ props }) => (
  <div className="col-6">
    <div className="card">
      <img src={props.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.publishedAt}</p>
        <a href={props.url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
);

// function NewsCard(props) {
//   return (
//     <div className="col-2">
//       {/* <div className="card" style={{margin:"2vw"}}>
//         <img src="..." className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">{props.title}</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default NewsCard;
