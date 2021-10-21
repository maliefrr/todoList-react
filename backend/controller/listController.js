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

export const getProductById = async (req, res) => {
	try {
		const list = await todoList.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.json(list[0]);
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

export const updateList = async (req, res) => {
	try {
		await todoList.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "data has been sucsessfully updated",
		});
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};

export const deleteList = async (req, res) => {
	try {
		await todoList.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "Data Has been sucsessfully deleted",
		});
	} catch (error) {
		res.json({
			error: error.message,
		});
	}
};
