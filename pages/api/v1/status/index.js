function status(request, response) {
  response.status(200).json({ mensagem: "Jesus te ama" });
}

export default status;
