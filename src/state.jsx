const user = {
  name: "Сидор",
  lastname: "Иванов",
  email: "sidor@mail.ru",
  id: 1,
  about: "Информация обо мне",
  avatar:
    "https://th.bing.com/th/id/OIP.51lfsJf2X6dzZDLHXsqASgAAAA?pid=ImgDet&w=460&h=460&rs=1",
};

const users = {
  0: { name: "Юлия", lastname: "Петрова" },
  1: { name: "Иван", lastname: "Иванов" },
  2: { name: "Мишель", lastname: "Сафронова" },
  3: { name: "Алексей", lastname: "Навальный" },
  4: { name: "Владимир", lastname: "Путин" },
};
export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
