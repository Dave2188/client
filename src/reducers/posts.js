export default (posts = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			console.log(action.payload);
			return action.payload;

		case "CREATE":
			return [...posts, action.payload];

		case "UPDATE":
			return posts.map((post) =>
				post.id === action.payload ? action.payload : post
			);

		default:
			return posts;
	}
};
