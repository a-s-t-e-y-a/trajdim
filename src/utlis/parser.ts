export function parseJsonData(jsonData: string): any {
    try {
      const parsedData = JSON.parse(jsonData);
      return parsedData;
    } catch (error) {
      return null;
    }
  }
  