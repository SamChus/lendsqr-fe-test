import { create } from "zustand";

interface OpenMobileSideNavState {
    isMobileSideNavOpen: boolean;
    setIsMobileSideNavOpen: (newState: boolean) => void;
}

export const useOpenMobileSideNavStore = create<OpenMobileSideNavState>((set) => ({
    isMobileSideNavOpen: false,
    setIsMobileSideNavOpen: (newState: boolean) =>
        set(() => ({
            isMobileSideNavOpen: newState,
        })),
}));
