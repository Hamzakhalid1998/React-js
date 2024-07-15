function customRender(createElement, customReact) {
  const createTag = document.createElement(createElement.type);
  createTag.innerHTML = createElement.children;
  //   for (const key in createElement.props) {
  //     createTag.setAttribute(key, createElement.props[key]);
  //   }

  const keys = Object.keys(createElement.props);

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    createTag.setAttribute(key, createElement.props[key]);
  }
  customReact.appendChild(createTag);
}

const createElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Visit Google",
};

const customReact = document.querySelector("#root");

customRender(createElement, customReact);
