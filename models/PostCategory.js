module.exports = (sequelize) => {
  const PostCategory = sequelize.define(
    'PostsCategory', {}, { timestamps: false, tableName: 'PostsCategories' },
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
      through: PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogPosts',
      through: PostCategory,
    });
  };
  return PostCategory;
};
