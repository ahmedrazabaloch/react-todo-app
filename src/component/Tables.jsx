import { Space, Table } from "antd";
const columns = [
  {
    title: "Index",
    dataIndex: "index",
  },
  {
    title: "Website Name",
    dataIndex: "name",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Visit",
    dataIndex: "visit",
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    render: () => (
      <Space size="middle">
        <a href="/">Delete</a>
      </Space>
    ),
  },
];
const data = [];
for (let i = 1; i <= 8; i++) {
  data.push({
    key: i,
    index: i,
    name: "Ahmed",
    visit: `New York No. ${i} Lake Park`,
  });
}

const TableApp = () => {
  const tableColumns = columns.map((item) => ({
    ...item,
  }));

  return (
    <>
      <Table
        columns={tableColumns}
        dataSource={data ? data : [""]}
   
      />
    </>
  );
};
export default TableApp;
