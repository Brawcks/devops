// IMPORT ALL JS COMPONENTS //////////////////////////////////////////
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// COLLECTIONS
import { Recipes } from '../collections/recipes.js';


// IMPORT ALL HTML COMPONENTS ///////////////////////////////////////
import './main.html';
import './Menu.html';

// LAYOUTS
import './partials/SideNav.html';
import './partials/Header.html';

import './layouts/HomeLayout.html';
import './layouts/MainLayout.html';

import './recipes/Recipes.html';
import './recipes/Recipe.html';
import './recipes/RecipeSingle.html';
import './recipes/NewRecipe.html';

// IMPORT ALL JAVASCRIPT COMPONENTS
// CLIENT
import './recipes/recipes.js';
import './recipes/recipe.js';
import './recipes/RecipeSingle.js';

import './Menu.js';

//LIBRARY
import '../lib/routes.js';





