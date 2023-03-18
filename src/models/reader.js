module.exports = (connection, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: [true],
          msg: "Please enter a valid email address",
        },
        notNull: {
          args: [true],
          msg: "Please enter an email address",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: [true],
          msg: "Name field cannot be empty",
        },
        notNull: {
          args: [true],
          msg: "Please enter a name",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: "Please enter a password",
        },
        checkPasswordLength(value) {
          if (value.length < 8)
            throw new Error("Password needs to be 8 characters or longer");
        },
      },
    },
  };

  const ReaderModel = connection.define("Reader", schema);
  return ReaderModel;
};
