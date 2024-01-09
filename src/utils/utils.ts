import { TodoType } from "../types/types";

type subTaskAddingProps = (
    id: string,
    array: TodoType[],
    task: TodoType,
) => TodoType[];

type RecursionProps =(
    id: string,
    array: TodoType[],
) => TodoType[];

type SearchProps =(
    id: string,
    array: TodoType[],
) => TodoType[]; null;

type CompleteTogglerProps =(
    array: TodoType[],
    state: boolean,
) => TodoType[];
   

