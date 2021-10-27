type PossibleItemTypes = string | number

export async function saveToFarDistantDatabase(key: string, param: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(param));
      resolve(null);
    }, 1000);
  });
};

export async function fetchFromFarDistantDatabase<ItemType extends PossibleItemTypes>(key: string): Promise<ItemType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: any = localStorage.getItem(key)
      if (data) {
        resolve(JSON.parse(data));
      } else {
        resolve([])
      }
    }, 1000);
  });
}
