# Litle router

### Easy to use router

## Public API
registerRoutes(arrayOfRoutesObjects)
- example for arrayOfRoutesObjects -
```javascript
[
	{
		path: "/products",
                func: "ProductComponent@handle" // ProductComponent is the controller
                				// handle - is a method that is going to be invoked after route is activated
        }
]
```
    
registerControllers(objectOfClasses)
	needed because the router should know where to find the funcs registered inside the registerRoutes method
- objectOfClasses 
- 
```javascript
    	{
        	ProductComponent,
        	HomeComponent
	}
```
