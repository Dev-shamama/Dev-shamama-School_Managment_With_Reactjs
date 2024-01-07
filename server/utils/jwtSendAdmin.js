const sendJWTAdmin = (admin, statusCode, res) => {
  const token = admin.jwtAuthToken();
  console.log(token)
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, admin, token });
};

module.exports = sendJWTAdmin;
