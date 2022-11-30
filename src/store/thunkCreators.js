import {API} from "../api/API";
import {add_cats, add_prods} from "./actionCreators";


export const createThunk_loadMainPage = (cat = 'smartphones') => async (dispatch) => {
    const data = await API.loadMainPage(cat)
    console.log('log from createThunk_loadMainPage',data)
    dispatch(add_prods(data.prods))
    dispatch(add_cats(data.cats))
}