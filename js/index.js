// function isInViewport(elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

class TabLinks {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.tabItem = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.tabItem);
    this.link.addEventListener("click", () => {
      this.select();
    })
    window.addEventListener("scroll", () => {
      if (this.isInViewport(this.tabItem)) {
        const allLinks = document.querySelectorAll(".tabs-link");
        Array.from(allLinks).forEach( item => { item.classList.remove('tabs-link-selected') });
        this.link.classList.add("tabs-link-selected");
        this.tabItem.select();
      } else {
        
      }
    })
  }
  select() {
    const allLinks = document.querySelectorAll(".tabs-link");
    Array.from(allLinks).forEach( item => { item.classList.remove('tabs-link-selected') });
    this.link.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
  isInViewport(elem) {
    console.log(elem.tabElement)
    const bounding = elem.tabElement.getBoundingClientRect();
    console.log(bounding)
    // console.log(bounding.top >= 0)
    // console.log(bounding.left >= 0)
    // console.log(bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    console.log("bottom", bounding.bottom)
    console.log("innerHeight", window.innerHeight)
    // console.log(bounding.right <= (window.innerWidth || document.documentElement.clientWidth))
    return (
        // bounding.top >= 0 &&
        // bounding.left >= 0 &&
        // bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)

        bounding.top >= 0 &&
        bounding.top <= window.innerHeight / 2
    );
  };
}

class TabItem {
  constructor(tabElement) {
    this.tabElement = tabElement;
  }
  select() {
    const allTabItems = document.querySelectorAll('.tabs-item');
    Array.from(allTabItems).forEach( item => { item.classList.remove('tabs-item-selected') });
    this.tabElement.classList.add('tabs-item-selected');
  }
}

let tabLinks = document.querySelectorAll(".tabs-link");

tabLinks = Array.from(tabLinks).map(link => new TabLinks(link));


// var h1 = document.querySelector('h1');

// window.addEventListener('scroll', function (event) {
// 	if (isInViewport(h1)) {
// 		console.log('yessssssss')
// 	}
// }, false);