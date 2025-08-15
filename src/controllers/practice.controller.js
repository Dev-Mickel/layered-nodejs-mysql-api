exports.getAllPractices = (req, res) => {
  res.status(200).send('Get all practices placeholder');
};

exports.createPractice = (req, res) => {
  res.status(201).send('Create practice placeholder');
};

exports.getPracticeById = (req, res) => {
  res.status(200).send(`Get practice ${req.params.id} placeholder`);
};

exports.updatePractice = (req, res) => {
  res.status(200).send(`Update practice ${req.params.id} placeholder`);
};

exports.deletePractice = (req, res) => {
  res.status(200).send(`Delete practice ${req.params.id} placeholder`);
};