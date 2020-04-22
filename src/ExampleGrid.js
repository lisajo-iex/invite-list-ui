import React, { FC, Children } from "react";
import { GridList, GridListTile } from "@material-ui/core";

const ExampleGrid =({ children }) => (
  <GridList maxCellSize={500}>
    {Children.map(children, (child) => (
      <GridListTile clone>{child}</GridListTile>
    ))}
  </GridList>
);

export default ExampleGrid;