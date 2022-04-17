import React from "react";
export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          /*每行都要有一个唯一的key去匹配*/
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {/*?的意思是前面的值为undefined时，后面的值也为undefined {undefined.name}*/}
              {users.find(user => user.id === project.personId)?.name || "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
