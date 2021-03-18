# Wedevs-Que2
Que: 2
Consider the following snippet:

let notifications = [
	{message: ‘Lorem’, read: true},
{message: ‘Ipsum’, read: true},
{message: ‘Dolor’, read: true},
{message: ‘Sit’, read: false},
{message: ‘Amet’, read: true}
];

let allRead = true;

You have to set the allRead variable to false using a built-in higher-order function on the `notifications` array. Conditions: a) You cannot use for, while, do-while loops b) You cannot use forEach(), map(), reduce(), filter(). The function checks whether any of the `read` property of any of the objects in the array is false, and returns true or false based on that check.
