import todoList from "../models/todoListModel.js";

export const getAllList = async (req, res) => {
	try {
		const list = await todoList.findAll();
		res.json(list);
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};
