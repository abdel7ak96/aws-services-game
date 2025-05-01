import { create } from "zustand";

type State = {
  startGame: boolean;
};

type Actions = {
  toggleGameState: () => void;
}

const useStore = create<State & Actions>((set) => ({
	startGame: false,
	toggleGameState: () => set((state) => ({ startGame: !state.startGame })),
}));

export default useStore;
