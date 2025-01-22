const mockData = {
  getUsers: async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/89343748-ecea-4cd0-87d8-ed2f90b48352"
    );
    return response.json();
  },
};

export default mockData;
