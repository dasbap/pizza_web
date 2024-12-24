export function createElement(tag, props = {}, ...children) {
  return {
    tag,
    props,
    children,
  };
}

export function reactive(state, callbackFn) {
  return new Proxy(state, {
    set(target, key, value) {
      target[key] = value;
      callbackFn();
      return true;
    }
  })
}

export function render(vNode, container) {
  // console.log({ vNode });

  if (typeof vNode === "string" || typeof vNode === "number") {
    container.appendChild(document.createTextNode(vNode));
    return;
  }

  const element = document.createElement(vNode.tag);

  if (vNode.props) {
    Object.keys(vNode.props).forEach((key) => {
      if (key.startsWith("on") && typeof vNode.props[key] === "function") {
        const event = key.slice(2).toLocaleLowerCase();
        element.addEventListener(event, vNode.props[key]);
      } else {
        element.setAttribute(key, vNode.props[key]);
      }
    });
  }

  vNode.children.forEach((child) => {
    render(child, element);
  });

  container.appendChild(element);
}
