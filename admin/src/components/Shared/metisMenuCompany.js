
const metisMenuCompany = [
	{
		"id": 'main',
		"label": "Main"
	},
	{
		"id": 1,
		"icon": "icon-speedometer",
		"label": "Dashboard",
		"to": "/dashboard",
	},
	{
		"id": 2,
		"icon": "icon-home",
		"label": "User",
		"to": "#",
		content: [							
			{
				"id": 3,
				"label": "User List",
				"to": "/user-list"
			}			
		]
	},
	

];

export default metisMenuCompany	