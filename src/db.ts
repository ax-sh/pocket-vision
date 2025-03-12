import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://localhost:8090');
export async function getUsers() {
  // fetch a paginated records list
  const resultList = await pb.collection('users').getList(1, 50, {
    filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
  });

  console.log(resultList);
}
