// directives/imgLazy.js
const imgLazy = {
  mounted(el, binding) {
    // 使用 IntersectionObserver API 来监听元素是否进入视口
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 当图片进入视口时，将 `src` 设置为真正的图片地址
          el.src = binding.value;
          // 停止观察
          observer.unobserve(el);
        }
      });
    });
    // 开始观察元素
    observer.observe(el);

    // 可选的：先设置一个占位图或低质量图
    el.src = 'path/to/placeholder-image.jpg';
  },
};

export default imgLazy;