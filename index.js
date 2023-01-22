import { select } from "d3";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const filterData = (data = {}) => {
  let newData = {};
};

const svg = select("body");
console.log(svg);

// fetch(
//   "https://data.num.edu.mn/dataset/b2de70f5-00ed-4450-bc0e-17fb871f8cd8/resource/ad6104be-91c6-4c64-986a-4f5c2961a996/download/num-wos-authors-2019-2020.json"
// )
//   .then((d) => d.json())
//   .then((data) => {
//     //filterData(data);
//     console.log(data.keys());
//     const svg = select("body");
//     console.log(svg);
//     // svg
//     //   .selectAll("rect")
//     //   .data(data, (d) => d)
//     //   .join("rect")
//     //   .attr("width", 50)
//     //   .attr("height", (d) => d)
//     //   .attr("x", (d, i) => i * 50)
//     //   .attr("y", (d) => 100 - d);
//   });
