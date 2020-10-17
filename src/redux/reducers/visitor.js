const userStructure = {
	id: null,
	date_time: "",
};

const userReducer = (state = userStructure, action) => {
	switch (action.type) {
		case "VISIT":
			return {
				id: action.payload.id,
				date_time: action.payload.date_time,
			};
		default:
			return state;
	}
};
export default userReducer;
