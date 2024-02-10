import React, { Component } from 'react';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutOur from '../../components/AboutOur/AboutOur';
// import backgroundImage from '../../pictures/首頁.jpg'; // 引入圖片
import './HomePage.css';
import banner from '../../pictures/WT/首頁icon/banner.gif'

import { useSpring, animated } from 'react-spring';


// const Particles = ({ numParticles = 50 }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const particles = [];

//     // 调整Canvas尺寸以匹配父容器或全屏
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         speed: 0.5 + Math.random() * 2, // 确保有可见的移动速度
//         size: 2 + Math.random() * 3, // 确保粒子大小足够可见
//         dx: Math.random() - 0.5, // 直接赋值速度分量
//         dy: Math.random() - 0.5,
//       });
//     }

//     const update = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(p => {
//         p.x += p.dx * p.speed;
//         p.y += p.dy * p.speed;

//         // 保持粒子在画布内
//         if(p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
//         if(p.y < 0 || p.y > canvas.height) p.dy = -p.dy;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
//         ctx.fillStyle = '#FFF';
//         ctx.fill();
//       });

//       requestAnimationFrame(update);
//     };

//     update();

//     // 清理函数，清除画布和取消动画帧请求
//     return () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//     };
//   }, [numParticles]); // 依赖项列表中包含numParticles，确保粒子数量变更时重新渲染

//   return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, width: '100%', height: '100%' }} />;
// };

const RippleEffect = () => {
  const [styles, set] = useSpring(() => ({
    to: [{ opacity: 0.5, scale: 1.5 }, { opacity: 0, scale: 2 }],
    from: { opacity: 0, scale: 0 },
    reset: true,
    onRest: () => set({ reset: true }),
  }));

  return <animated.div onMouseMove={() => set()} style={{
    ...styles,
    position: 'absolute',
    borderRadius: '50%',
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    pointerEvents: 'none', // Ensure the animation doesn't interfere with other elements
  }}/>;
};

const LightRayEffect = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 3000 },
    loop: true,
  });

  return <animated.div style={{
    ...props,
    position: 'absolute',
    top: 0, // 確保從頂部開始
    left: 0, // 確保從左側開始
    width: '100%', // 覆蓋整個容器的寬度
    height: '100%', // 覆蓋整個容器的高度，避免超出或不足
    background: 'linear-gradient(to right, rgba(255,255,0,0) 0%, rgba(255,255,224,0.5) 50%, rgba(255,255,0,0) 100%)',
  }}/>;
};

class HomePage extends Component {
  render() {

    return (
      <div className="homePage">
        {/* <header className="homeHeader" style={headerStyle}> */}
        <header className="homeHeader">
          {/* <img src={banner} alt="首頁" className='homeHeader'/> */}
          <div className="overlay"></div> {/* 遮罩層 */}
          <img src={banner} alt="Banner" className="bannerImg"/> {/* banner图片 */}
          <LightRayEffect /> {/* 添加光線效果 */}
          <RippleEffect /> {/* 添加波紋效果 */}


        </header>
        <div className="middleText"> {/* 新增中間文字 */}
          <h1>我們的理念</h1>
          <p>專業金融資訊服務，讓專業來做數學。</p>
          
        </div>


        <ServiceSection />
        <AboutOur />
        {/* <ClientsSection />
        <ArticlesSection /> */}
        {/* Footer would go here */}
      </div>
    );
  }
}

export default HomePage;