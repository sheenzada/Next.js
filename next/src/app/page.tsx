// 'use client';

// import { useInfiniteQuery } from
// '@tailwindcss/postcss';
// import { resolve } from 'styled-jsx/css';

// const posts = [ 
//     { id: 1, title: 'post 1'},
//     { id: 2, title: 'post 2'},
//     { id: 3, title: 'post 3'},
//     { id: 4, title: 'post 4'},
//     { id: 5, title: 'post 5'},
//     { id: 6, title: 'post 6'},
//     { id: 7, title: 'post 7'},
//     { id: 8, title: 'post 8'},
//     { id: 9, title: 'post 9'},
//     { id: 10, title: 'post 10'},
// ];
// const fetchPost = async (page:
// number) => {
//     await new Promise ((resolve) => 
//     setTimeout(resolve , 1000));
//     const pageSize = 2;
//     const startIndex = (page - 1) *
//     pageSize;
//     const endIndex = startIndex +
//     pageSize;
//     return posts.slice(startIndex, endIndex);
// };

// export default function Home(){
//     const { data , fetchNextPage , isFetchingNextPage } = 
//     useInfiniteQuery(
//         ['posts'],
//         async ({ pageParam = 1 }) =>
//         await fetchPost(pageParam),
//         {
//             getNextPageParam: (_,
//                 pages) => {
//                     return pages.length
//                     +1;
//                 },
//                 initailData: {
//                     pages: [posts.slice (0,2)],
//                     pageParams: [1],
//                 },
//         }
//     );
//         return (
        
//             <div>
//                 {data?.pages.map((page,i) => (
//                     <div key={i}>
//                         {page.map((posts) => (
//                             <div key=
//                             {posts.id}>
//                             {posts.tilte}
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             <button
//                 onClick={() =>
//                 fetchNextPage()}
//                 disabled=
//                 {isFetchingNextPage}
//             >
//                 Click Me
//             </button>
//         </div>
//         );

// }
