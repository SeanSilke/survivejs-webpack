export default (text = '<h1 style="color:blue" >Hello world<h1>') => {
  const element = document.createElement('div');

  element.innerHTML = text;

  return element;
};
