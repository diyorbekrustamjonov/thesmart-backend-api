import validation from "#validations/auth.Validation"
import model from "#models/auth.Model"
import JWT from "#utils/jwt"

const LOGIN = async  (req, res) => {
	try{
		if(validation.LOGIN({ ...req.body })?.status != true) throw new Error(validation.LOGIN({ ...req.body }).message)
		
		let data = await model.LOGIN({ ...req.body });

		if(!data) throw new Error("Phone number or password is incorrect")

		delete data.user_password

		return res.status(200).json({
			status: 200,
			message: "Login Successful",
			user_role: data.user_role,
			token: await JWT.sign({user_id: data.user_id, user_role: data.user_role}),
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			token: null,
			user_role: null
		})
	}
}

const REGISTER = async  (req, res) => {
	try{
		if(validation.REGISTER({ ...req.body })?.status != true) throw new Error(validation.REGISTER({ ...req.body }).message)

		if((await model.checkUser({ ...req.body }))?.length) throw new Error("User already exists")
		
		const data = await model.REGISTER({ ...req.body });

		if(!data) throw new Error("User not created")

		return res.status(200).json({
			status: 200,
			message: "Register Successful",
			token: await JWT.sign({user_id: data.user_id}),
			data
		})
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error.message,
			token: null
		})
	}
}

export default {
	LOGIN,
	REGISTER
}