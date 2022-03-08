
const metisMenu = [
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
			},				
			{
				"id": 4,
				"label": "Company List",
				"to": "/company-list"
			}				
		]
	},
	{
		"id": 5,
		"icon": "icon-home",
		"label": "Product",
		"to": "#",
		content: [							
			{
				"id": 6,
				"label": "Category List",
				"to": "/category-list"
			},
			{
				"id": 7,
				"label": "Product List",
				"to": "/product-list"
			},											
			{
				"id": 8,
				"label": "Question List",
				"to": "/question-list"
			}											
		]
	},
	{
		"id": 9,
		"icon": "icon-home",
		"label": "Admin-Settings",
		"to": "#",
		content: [							
			{
				"id": 10,
				"label": "Privacy Policy",
				"to": "/pp?content_type=pp"
			},					
			{
				"id": 11,
				"label": "Terms & Condition",
				"to": "/tc?content_type=tc"
			}					
		]
	},
	

];

export default metisMenu	