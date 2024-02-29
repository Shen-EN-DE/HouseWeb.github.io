import React, { Component } from 'react';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutOur from '../../components/AboutOur/AboutOur';
// import backgroundImage from '../../pictures/首頁.jpg'; // 引入圖片
import './HomePage.css';
import banner from '../../pictures/WT/首頁icon/banner.gif'

import { useSpring, animated } from 'react-spring';

import serviceImage1 from '../../pictures/WT/首頁icon/首頁圖片/客戶信任.png';
import serviceImage2 from '../../pictures/WT/首頁icon/首頁圖片/誠信正直.png';
import serviceImage3 from '../../pictures/WT/首頁icon/首頁圖片/創新研發.png';

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
          <h1>關於白樹金融科技</h1>
          <p>我們是致力於將專業服務運用於金融領域的青創團隊。透過深入研究行為模式與精密的資料剖析來構築分析模型。本團隊期望利用機器學習提供多元服務，期望成為金融科技領域的領先者，為客戶提供智慧及便捷的金融科技服務。在未來，本公司會持續學習與挑戰以人工智慧為核心創造價值</p>
          
        </div>
          {/* -------------------------------------- */}
          {/* 這裡是使用ServiceItem裡面的ServiceStyle.css的模板，因此如果變動，首頁的這些也會變動，要注意 */}
          {/* -------------------------------------- */}
         <div className="homeServiceContainer">
          {/* Service Item 1 */}
          <div className="homeServiceItem">
            <img src={serviceImage1} alt="Service 1" className="homeServiceIcon"/>
            <h3>客戶信任</h3>
            <p>與上市公司合作，重視服務信任</p>
          </div>

          {/* Service Item 2 */}
          <div className="homeServiceItem">
            <img src={serviceImage2} alt="Service 2" className="homeServiceIcon"/>
            <h3>誠信正直</h3>
            <p>以守信為本，注重客戶完整隱私</p>
          </div>

          {/* Service Item 3 */}
          <div className="homeServiceItem">
            <img src={serviceImage3} alt="Service 3" className="homeServiceIcon"/>
            <h3>創新研發</h3>
            <p>持續學習與挑戰，提供完善服務</p>
          </div>
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