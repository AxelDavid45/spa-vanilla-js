const resolveRoute = (route) => {
  if(route <= 3) {
      return route === '/' ? route : '/:id';
  }
  return `/${route}`;
};

export default resolveRoute;
