exports.sayHello = (req, res) => {
  const name = req.cookies?.name || "Guest";
  res.cookie("name", "jay", { httpOnly: true });
  res.send(`hello ${name} world of the Elysium`);
};