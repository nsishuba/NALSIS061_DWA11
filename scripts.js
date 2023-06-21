import { subscribe, dispatch} from "./model/store.js";
import { add, subtract, reset } from "./model/actions.js";

subscribe((_, next) => console.log(next));

dispatch(add());
dispatch(add());
dispatch(subtract());
dispatch(reset());

