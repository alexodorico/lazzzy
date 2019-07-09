function lazzzy(elementId, className = "lazy") {
  const targetNode = document.getElementById(elementId);
  const config = { subtree: true, childList: true };
  const callback = (mutationsList, observer) => {
    const addedNodes = mutationsList[0].addedNodes;
    recursiveSearch(addedNodes);

    function recursiveSearch(nodes) {
      nodes.forEach(node => {
        if (node.nodeName === "IMG") {
          node.classList.add(className);
        }

        if (node.childNodes.length) {
          recursiveSearch(node.childNodes);
        }
      });
    }
    
    return lazyLoadSetUp(className);
  }

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config)
}

function lazyLoadSetUp(className = "lazy") {
  const lazyImages = [].slice.call(document.querySelectorAll(`img.${className}`));

  const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove(className);
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach(lazyImage => {
    lazyImageObserver.observe(lazyImage);
  });
}
