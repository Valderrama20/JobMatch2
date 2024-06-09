import { atom } from "jotai";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtils";

const createPersistedAtom = (key, initialValue) => {
  const baseAtom = atom(loadFromLocalStorage(key) || initialValue);

  const persistedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      set(baseAtom, update);
      saveToLocalStorage(key, get(baseAtom));
    }
  );
  return persistedAtom;
};

export const userAtom = createPersistedAtom("user", null);
export const publicationsAtom = createPersistedAtom("publications", null);
