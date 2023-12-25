import React from 'react';
import './index.css';

// 防抖函数:在视口大小频繁变动时只执行最后一次变化引起的缩放
const debounce = (fn, delay) => {
  let delays = delay || 500;
  let timer;
  return function () {
    let th = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delays);
  };
  }
class ScaleBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scale: 1,
      boxObserver: null,
    };
    this.changeScale = debounce((e) => {
      const scale = this.getScale(e);
      this.setState({ scale })
    }, 500)
  }
  // 优先级：container > window(isFullScreen)
  componentDidMount(){
    const { container, isFullScreen } = this.props;
    if(container){
      // 只要传递了container就使用该容器的宽高
      const boxObserver = new ResizeObserver(this.changeScale);
      boxObserver.observe(container);
      this.setState({ boxObserver })
    }else if(isFullScreen){
      // 如果是全屏就使用视口宽高
      this.changeScale();
      window.addEventListener('resize', this.changeScale)
    }
  }

  componentDidUpdate(prevProps){
    // 处理业务需求的多样导致的缩放失效问题
		const { container:oldContainerValue, isFullScreen: oldIsFullScreen } = prevProps;
		const { container, isFullScreen } = this.props;
    // 如果更新后传递了container就加上尺寸监控
		if(!oldContainerValue && container){
			const boxObserver = new ResizeObserver(this.changeScale);
			boxObserver.observe(container);
      this.setState({ boxObserver });
      // 去掉视口尺寸监控
      window.removeEventListener('resize', this.changeScale)
      return;
		}
    // 如果去掉了isFullScreent，就去掉视口监控
    if(oldIsFullScreen && !isFullScreen){
      window.removeEventListener('resize', this.changeScale)
    }
    // 如果加上了了isFullScreent，就加上视口监控
    if(!oldIsFullScreen && isFullScreen && !container){
      this.changeScale();
      window.addEventListener('resize', this.changeScale)
    }
	}

  componentWillUnmount(){
    const { props: { isFullScreen }, state: { boxObserver } } = this;
    if(isFullScreen){
      window.removeEventListener('resize', this.changeScale)
    }else if(boxObserver){
      boxObserver.unobserve();
    }
  }

  getScale(e) {
    const {width, height} = this.props;
    // 拿到元素style.width实际的宽度是不可行的，直接再resizeObser里拿可以吗？
    let ww,wh;
    if(!e || (e && e.constructor === Event)){
      // 说明没有传container
      ww = window.innerWidth / width;
      wh = window.innerHeight / height;
    }else{
    const {width: currentWidth, height: currentHeight} = e[0].contentRect;
      ww = currentWidth / width;
      wh = currentHeight / height;
    }
		return ww < wh ? ww : wh
	}

  render(){
    // eslint-disable-next-line
    const { props: { isFullScreen, container, width, height, children, ...argProps }, state: { scale } } = this;

    return <div className="ry-scale-box"
			style={{
        position: !container ? 'fixed' : 'relative',
				transform: `scale(${scale}) translate(-50%, -50%)`,
				WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
				width,
				height,
			}}
      {...argProps}>
			{children ? children : null}
		</div>
  }
}

export default ScaleBox