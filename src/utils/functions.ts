"use client";
import { getSampleJdJSON } from "../store/data";

export const capitalize = (str: string | any) => {
  return str.charAt(0).toUpperCase() + str.substring(1);
};

export let roles = getSampleJdJSON()
  ?.map((ele) => capitalize(ele.jobRole))
  .filter((v, i, a) => a.findIndex((v2) => v2 === v) === i);
export let experience = getSampleJdJSON()
  .filter((ele) => ele.minExp)
  ?.map((ele) => ele.minExp || 0)
  .filter((v, i, a) => a.findIndex((v2) => v2 === v) === i)
  .sort((a, b) => a - b);
export let minSalary = getSampleJdJSON()
  .filter((ele) => ele.minJdSalary)
  ?.map((ele) => ele.minJdSalary)
  .filter((v, i, a) => a.findIndex((v2) => v2 === v) === i)
  .sort((a, b) => a - b);

export function debounce(func: Function, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function getSalary({
  minSalary,
  maxSalary,
}: {
  minSalary: number;
  maxSalary: number;
}) {
  return `${minSalary ? minSalary : maxSalary}k USD - ${maxSalary}k USD`;
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
