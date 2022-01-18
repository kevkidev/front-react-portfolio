import "./MindmapChart";

const MindmindChart = () => {
  import("d3").then((d3) => {
    const h = 100;
    const w = 500;
    const canvas = d3
      .select("#d3-mindmap")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    const data = [100, 98, 95, 93, 90];
    const wGap = 30;
    const hGap = 3;
    canvas
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * wGap)
      .attr("y", (d, i) => h - 3 * hGap)
      .attr("width", 25)
      .attr("height", (d, i) => d * 3)
      .attr("fill", "red")
      .attr("class", "bar")
      .text((d) => d);

    canvas
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 30)
      .attr("x", (d, i) => h - (d * 3 + 3));
  });

  return <div id="d3-mindmap"></div>;
};
export default MindmindChart;
