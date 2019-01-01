import * as ActionTypes from './ActionTypes'
import {DISHES} from "../shared/dishes";
import {baseUrl} from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))

    // react side effect: react saga, redux thunk, react observable la nhung middle ware cho phep dung action va cho den khi nhan duoc du lieu

    // setTimeout(() => {
    //     dispatch(addDishes(DISHES))
    // }, 2000)
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const fetchComments = () => (dispatch) => {
    fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
}
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
})

/**
 *
 * @returns {Function}
 */
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading())
    fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
}

/**
 *
 * @param promos
 * @returns {{type: string, payload: *}}
 */
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})

/**
 *
 * @param errMess
 * @returns {{type: string, payload: *}}
 */
export const promosFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
})

/**
 *
 * @returns {{type: string}}
 */
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
})