/** @module vector3 */

/**
 * Represents a three-dimensional vector.
 */
export interface IVector3 {
  x: number;
  y: number;
  z: number;
}

export * from "./vector3/add";
export * from "./vector3/distance";
export * from "./vector3/divide";
export * from "./vector3/dot";
export * from "./vector3/length";
export * from "./vector3/multiply";
export * from "./vector3/negate";
export * from "./vector3/pointIntersection";
export * from "./vector3/positionAroundVector3";
export * from "./vector3/scale";
export * from "./vector3/subtract";
export * from "./vector3/traverse";
