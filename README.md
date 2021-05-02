Introduction:

    Character: must have at least one image, name, age, weight, history, and movies or series
    related (in which he participated).
    Movie or Series: it may have many associated characters, it will have an image, title, creation date,
    rating (from 1 to 5) and gender.
    Users: To make requests to subsequent endpoints, the user must have a token that
    you will get when authenticating. For this, the registration and login endpoints must be developed, which allow
    get the token. (I'ld like to implement JWT)

Technologies:

    Modern Javascript ES6 by Babel
    Sequelize - Postgres
    Express

Launch:

    npm run dev

Progress:

    -character:
		-list: name, picture - 
		-detail: all fields, associated films - by ID - 
		-crud:
			- create - 
			- update - 
			- delete - 
		-search: name, filter by age, weight, associated films

	-film:
		-list: title, creationdate, picture - READY
		-detail: all fields, associated characters - by ID - READY (fields, need associations)
		-crud:
			- create - READY
			- update - 
			- delete - READY
		-search: title, filter by genre. Allows order by asc or desc date

	-auth