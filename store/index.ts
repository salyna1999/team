import { GetterTree, ActionTree, MutationTree } from "vuex";

export const state = () => ({
  gazeState: {} as Object
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  gazeState: state => state.gazeState
};

export const mutations: MutationTree<RootState> = {
  EDIT_STATE: (state, newState: Object) => {
    state.gazeState = newState;
  }
};
