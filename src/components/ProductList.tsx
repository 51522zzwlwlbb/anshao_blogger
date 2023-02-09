// import { Button, Popconfirm, Table } from 'antd';
// import React from 'react';

// const ProductList: React.FC<{
//   products: { name: string }[];
//   onDelete: (id: string) => void;
//   onAdd: () => void;
// }> = ({
//   onDelete,
//   products,
//   onAdd
// }) => {
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//     },
//     {
//       title: 'Actions',
//       render(text, record) {
//         return (
//           <>
//             <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
//               <Button>Delete</Button>
//             </Popconfirm>
//             <Popconfirm title="add?" onConfirm={() => onAdd()}>
//               <Button>add</Button>
//             </Popconfirm>
//           </>

//         );
//       },
//     },
//   ];
//   return <Table rowKey="id" dataSource={products} columns={columns} />;
// };

// export default ProductList;
