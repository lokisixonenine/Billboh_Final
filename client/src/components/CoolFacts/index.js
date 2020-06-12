import React from "react";

export default ({ props }) => {
  console.log(props);
  return (
    <div>
      {/* <div >
    <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">YEAR: {props.year}</h5>
        <p className="card-text">{props.text}4</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

//   className="col-2"
//   className="card" style={{margin:"2vw"}}

// function CoolFacts(props) {
//     console.log("props1", props.text);
//     return (
//         <p>boo!</p>
//         // <ul className="list-group search-results">
//         //     {props.data.map(data => (
//         //         <li key={data} className="list-group-item">
//         //             <p>{data.text}</p>
//         //         </li>
//         //     ))}
//         // </ul>
//     );
// }

// export default CoolFacts;
