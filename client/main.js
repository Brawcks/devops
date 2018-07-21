// IMPORT ALL JS COMPONENTS //////////////////////////////////////////
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// COLLECTIONS
import { Recipes } from '../collections/recipes.js';

// IMPORT ALL JAVASCRIPT COMPONENTS
// SUBSCRIBE
import './recipes/recipes.js';




// IMPORT ALL HTML COMPONENTS ///////////////////////////////////////

import '../lib/routes.js';
import './main.html';

// LAYOUTS
import './layouts/HomeLayout.html';
import './layouts/MainLayout.html';

import './recipes/Recipes.html';
import './recipes/NewRecipe.html';




