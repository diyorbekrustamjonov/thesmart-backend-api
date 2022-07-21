import validation from "#validations/compare.Validation"
import model from "#models/compare.Model"

const POST = async (req, res) => { 
	try{ 
		if(validation.POST({ ...req.body })?.status != true) throw new Error(validation.POST({ ...req.body }).message)

		let compare = await model.POST({...req.body})

		if(!compare?.length) throw new Error("Compare not working!")

		res.status(200).json({
			status: 200,
			message: "Compare successfully fetched",
			data: compare
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			data: null
		})
	}
}



export default {
	POST
}