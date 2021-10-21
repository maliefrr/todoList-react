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

export const createList = async (req, res) => {
	try {
		await todoList.create(req.body);
		res.json({
			message: "List has been sucsessfully added",
		});
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};
