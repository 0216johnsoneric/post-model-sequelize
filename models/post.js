module.exports = function(sequelize, DataTypes) {
    let Post = sequelize.define('post', {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        category: DataTypes.STRING
        });
  return Post;
};

// 5) Create a Sequelize `Post` model here. The model should have a title property of type DataTypes.STRING, a body property of DataTypes.TEXT, and a category property of DataTypes.STRING. 
//<https://sequelize.org/master/manual/model-basics.html#data-types>