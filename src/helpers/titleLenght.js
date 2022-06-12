const titleLenght = (text) => {
   const substring = text.substring(0, 100);
   return (text.length > 100 ? substring + "..." : text);
};

export default titleLenght;