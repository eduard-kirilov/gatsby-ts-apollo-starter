import { actions, get } from '.';

const { getCartSelectedIds } = get;
const { setSelectedIds } = actions;

export const initCartSelected = () => async (
  dispatch: any,
  getStore: unknown,
) => {
  const items = JSON.parse(localStorage.getItem('CartSelected'));

  if (items.length && items.length > 0) {
    console.log('items ', items)
    dispatch(setSelectedIds(items));
  }
};

export const addToCart = (id: string) => async (
  dispatch: any,
  getStore: () => {},
) => {
  const store = getStore();
  const ids = getCartSelectedIds(store);

  console.log('addToCart ', store, ids)
  let newIds = [...ids];
  if (!ids.includes(id)) newIds = [...newIds, id];

  const items = JSON.parse(localStorage.getItem('CartSelected'));
  if (items.length && items.length > 0) localStorage.removeItem('CartSelected');
  localStorage.setItem('CartSelected', JSON.stringify(newIds));
  dispatch(setSelectedIds(items));
};
