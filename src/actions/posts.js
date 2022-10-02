import * as api from "../api";

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		console.log(data);

		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}

	// console.log(action.payload);
	// const action = { type: "FETCH_ALL", payload: [] };
	// dispatch(action);
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log("this isnt working");
	}
};
