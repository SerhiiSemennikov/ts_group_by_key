type GroupsMap<T> = {
  [key: string]: T[];
};

// write code here;

export function groupByKey<T>(arrayOfObjects: T[], key: keyof T): GroupsMap<T> {
  const newArrayOfObjects: GroupsMap<T> = {};

  arrayOfObjects.map((objectInArray) => {
    const keyValue = String(objectInArray[key]);

    if (!newArrayOfObjects[keyValue]) {
      newArrayOfObjects[keyValue] = [];
    }

    newArrayOfObjects[keyValue].push(objectInArray);
  });

  return newArrayOfObjects;
}
