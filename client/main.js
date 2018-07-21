// IMPORT ALL JS COMPONENTS //////////////////////////////////////////

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);


// IMPORT ALL HTML COMPONENTS ///////////////////////////////////////

import '../lib/routes.js';
import './main.html';

// LAYOUTS
import './layouts/HomeLayout.html';
import './layouts/MainLayout.html';

import './recipes/Recipes.html';
import './recipes/NewRecipe.html';



