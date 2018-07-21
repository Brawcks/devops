import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

const self = this.Meteor;

Recipes.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
})

Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    }
})

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden",
        }
    },
    ingredients: {
        type: Array,
    },
    'ingredients.$': {
        type: Ingredient,
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return self.userId();
        },
        autoform: {
            type: "hidden",
        }
    },
    createdAt: {
        type: Date(),
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden",
        }
    }
})

Recipes.attachSchema( RecipeSchema );
