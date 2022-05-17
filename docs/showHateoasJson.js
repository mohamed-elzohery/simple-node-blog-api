
const showHateoasJson = (req, res) => {
        // create an example JSON Schema
        const userSchema = {
            "name": "User",
            "description": "This JSON Schema defines the parameters required to create a User object",
            "properties": {
                "name": {
                    "userame": "Name",
                    "description": "Please enter your name",
                    "type": "string",
                    "maxLength": 40,
                    "minLength": 3,
                    "required": true
                },
                "dob": {
                    "title": "Date of birth",
                    "type": "Date",
                    "max": "150 years",
                    "min": "16 years"
                },
                "isSuspended": {
                    "title": "Suspension state",
                    "description": "Please enter user status",
                    "type": "boolean",
                    "required": true
                }
            }
        };

        res.status(200).json(userSchema, [
            { rel: "suspend", method: "POST", title: 'Suspend User', href: 'http://localhost:5000/api/blog/v1/users/:userId/suspend' },
            { rel: "unsuspend", method: "POST", title: 'Unsuspend User', href: 'http://localhost:5000/api/blog/v1/users/:userId/unsuspend' }
        ]);
}

module.exports = showHateoasJson;