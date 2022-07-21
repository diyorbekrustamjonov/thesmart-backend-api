import fileUpload from "express-fileupload"
import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import { resolve } from "path"

import morgan from "morgan"

import "#config/index"
import routes from "#api/routes"

!async function() {
	const app = express()

	app.use(cors())

	app.use(morgan("dev"))
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))

	// static files
	app.use(express.static(resolve(process.cwd(), "src", "uploads")))
	
	app.use(express.json())

	app.use(fileUpload({
		limits: {
			fileSize: 50 * 1024 * 1024
		}	
	}))

	app.use("/api", routes)

	try {
		await app.listen(process.env.PORT, () => {
			console.log(`Server running on port ${process.env.PORT}`)
		})
	} catch (error) {
		console.error(error)
	}
}()