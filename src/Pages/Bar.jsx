// import React from "react";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

// export default function Bar(props) {
//   var a = Number(props.Total);
//   var b = Number(props.Recover);
//   var c = Number(props.Active);
//   var d = Number(props.Death);

//   const data = [
//     { quarter: 1, earnings: a },
//     { quarter: 2, earnings: b },
//     { quarter: 3, earnings: c },
//     { quarter: 4, earnings: d },
//   ];

//   return (
//     <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
//       <VictoryAxis
//         tickValues={[1, 2, 3, 4]}
//         tickFormat={["Total", "Recovered", "Active", "Deaths"]}
//         style={{ fontSize: "1em" }}
//       />
//       <VictoryAxis dependentAxis tickFormat={(x) => `${x / 10000000}Cr`} />
//       <VictoryBar data={data} x="quarter" y="earnings" />
//     </VictoryChart>
//   );
// }
