import Button from './buttonState';
import buttonState from './buttonState'
import { Ref } from 'vue';

export default interface selectedMenu {
    selectedView: Ref<buttonState[]>;
    selectedMode:  Ref<buttonState[]>;
    selectedGeometryOption: Ref<buttonState[]>;
}