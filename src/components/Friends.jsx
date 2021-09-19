import React from "react";

const Friends = () => {
  return (<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Имя и фамилия</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>)
};

export default Friends;

// Чижиков Сергей Анатольевич
// 09:59
// class Friends extends React.Component {
// render() {
// let users = this.props.function();
// //console.log(Object.keys(users).length);
// let userCount = Object.keys(users).length;
// let userRow = [];

// for (let i = 0; i < userCount; i++) {
// userRow.push(
// <TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname} />
// );
// }
// return (
// <table className="table">
// <thead>
// <tr>
// <th scope="col">#</th>
// <th scope="col">Фамилия и имя</th>
// </tr>
// </thead>
// <tbody>{userRow}</tbody>
// </table>
// );
// }
// }

// this.props.function().then((users) => {
// console.log(users);
// let userCount = users.length;
// let userRow = [];
// for (let i = 0; i < userCount; i++) {
// userRow.push(
// <TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname} />
// );
// }
// });

