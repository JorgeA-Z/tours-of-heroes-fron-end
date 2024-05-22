import { Hero } from "./hero";
export interface ModalResponse {
    hero: Hero;
    type: 'add' | 'edit' | 'view';
}
