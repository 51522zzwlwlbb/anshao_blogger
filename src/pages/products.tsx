// import ProductList from '@/components/ProductList';
// import axios from 'axios';
// import React from 'react';
// import { useMutation, useQuery, useQueryClient } from 'umi';
// import styles from './products.less';

// export default function Page() {
//   const queryClient = useQueryClient();
//   const productsQuery = useQuery(['products'], {
//     queryFn() {
//       return axios.get('/api/products').then((res) => res.data);
//     },
//   });
//   const productsDeleteMutation = useMutation({
//     mutationFn(id: string) {
//       return axios.delete(`/api/products/${id}`);
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: ['products'] });
//     },
//   });
//   const productsAddMutation = useMutation({
//     mutationFn() {
//       return axios.post('/api/products/addProduct');
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: ['products'] });
//     },
//   })
//   if (productsQuery.isLoading) return null;
//   return (
//     <div>
//       <h1 className={styles.title}>Page products</h1>
//       <ProductList
//         products={productsQuery.data.data}
//         onDelete={(id) => {
//           productsDeleteMutation.mutate(id);
//         }}
//         onAdd={() => {
//           productsAddMutation.mutate();
//         }}
//       />
//     </div>
//   );
// }
