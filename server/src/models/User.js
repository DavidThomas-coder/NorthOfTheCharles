/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email", "username"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "username", "lastName", "firstName", "city"],

      properties: {
        email: { type: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        username: { type: "string" },
        cryptedPassword: { type: "string" },
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }

  static get relationMappings() {
    const { Friend, Friendship, Post, Comment, Like } = require ("./index.js")

    return {
      friends: {
        relation: Model.ManyToManyRelation,
        modelClass: Friend,
        join: {
          from: "users.id",
          through: {
            from: "friendships.userId",
            to: "friendships.friendId"
          },
          to: "friends.id"
        }
      },
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: "users.id",
          to: "posts.userId"
        }
      },
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: "users.id",
          to: "comments.userId"
        }
      },
      friendships: {
        relation: Model.HasManyRelation,
        modelClass: Friendship,
        join: {
          from: "users.id",
          to: "friendships.userId"
        }
      },
      likes: {
        relation: Model.HasManyRelation,
        modelClass: Like,
        join: {
          from: "users.id",
          to: "likes.userId"
        }
      }
    }
  }
}

module.exports = User;
