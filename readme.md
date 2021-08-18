# Routing pizzas

This journey have a few chapters. Check back regularly for updates.

* It starts with creating routes,
* Next you will add data to you routes.
* Create a Pizza cart
* After that you will add multi user support,
* after that you will store orders in a database,
* then you will add pizza delivery support

## Creating routes

Using the Handlebars Templates in the views folder create these routes:

Route name | Description
--------|--------------------------
`/pizzas`| a **get** route to show a list of pizzas
`/pizza/add` | a **get** route that contains a form - that posts to `/pizza/add/`
 `/pizza/add/` | a **post** route for now let is redirect to the `/pizzas` get route.
`/pizzas/edit/:pizza_id` | a **get** route for editing pizzas - for now display the `id` passed into the route in the template.

## Adding data to the routes

Use the `PizzaService` Factory Function skeleton to add data to the routes. Store pizzas on a JavaScript list `[]`

A pizza object looks like this:

```
{
	id : 17,
	size : 'small',
	name : 'Chicken & Cheese',
	description : 'Our fresh new Chicken and Cheese pizza with tasty free range chicken the latest cheese flavours from the ...'
}
```

## Add a Pizza Cart

## Multiuser support

## Using the database

## Pizza delivery support





