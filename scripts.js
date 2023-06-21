import { subscribe, dispatch, getState} from "./model/store.js";
import { add, subtract, reset } from "./model/actions.js";

subscribe((_, next) => console.log(next));

console.log(getState())
dispatch(add());
dispatch(add());
dispatch(subtract());
dispatch(reset());

