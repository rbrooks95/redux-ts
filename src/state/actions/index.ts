import { ActionType } from "../action-type";

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSOITORIES;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositioriesErorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositioriesErorAction;
