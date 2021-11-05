import {atom} from 'recoil';

 const offlineState = atom({
  key: "offlineState",
  default:true
});

export default offlineState;