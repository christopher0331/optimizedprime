import React,{ useRef, useEffect } from 'react';
import MyImage from './ParticleImage.js';


const Canvas = props => {
    
    const canvasRef = useRef(null);

    useEffect(() => {
    
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d');
    
        let particlesArray = [];
        const numberOfParticles = 15000;
        const detail = 1;
    
        ctx.drawImage(MyImage, 0, 0, canvas.width, canvas.height);
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        let grid = [];
        for (let y = 0; y < canvas.height; y += detail){
            let row = [];
            for (let x = 0; x < canvas.width; x += detail){
                const red = pixels.data[(y * 4 * pixels.width) + (x * 4)]
                const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)]
                const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)]
                const color = 'rgb(' + red +',' + green + ',' + blue + ')';
                const brightness = calculateBrightness(red, green, blue)/100;
    
                row.push(brightness);
            }  
            grid.push(row); 
        }


        let animationFrameId
    
        class Particle {
            constructor(){
                this.x = Math.random() * canvas.width;
                this.y =  0;
                this.speed = 0;
                this.velocity = Math.random() * 0.7;
                this.size = Math.random() * 2 + .1;
            }

            async update () {
                this.speed = grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
                let movement = (2.5 - this.speed) + this.velocity;
                this.y += movement;
                if (this.y >= canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
            }
            
            draw(){
                ctx.beginPath();
                ctx.fillStyle = 'white';
                ctx.arc(this.x, this.y, this.size, 0, 1 * Math.PI);
                ctx.fill();
            }
        }


        function init(){
            for (let i = 0; i < numberOfParticles; i++){
                particlesArray.push(new Particle());
            }
        }
        init();
        function animate () {
            ctx.globalAlpha = 0.09;
            ctx.fillStyle = 'rgb(0, 0,0)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 0.2;
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                ctx.globalAlpha = particlesArray[i].speed * 0.01;
                particlesArray[i].draw();
            }
            requestAnimationFrame( animate );
        }
        animate();

        function calculateBrightness(red, green, blue){
            return Math.sqrt(
                (red * red) * 1.299 +
                (green * green) * 0.587 +
                (blue * blue) * 0.114
            );
        }

        //Our draw came here

        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
      }, [])
      

    return <canvas ref={canvasRef} {...props} />

}

export const MemoizedCanvas = React.memo(Canvas);
export default MemoizedCanvas;

// myImage.addEventListener('load', function(){
//     const canvas = document.getElementsByClassName('canvas1')

//     const ctx = canvas.getContext('2d');
//     canvas.width = 500;
//     canvas.height = 706;
    
//     ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

//     let particlesArray = [];
//     const numberOfParticles = 5000;

//     class Particle {
//         constructor(){
//             this.x = Math.random() * canvas.width;
//             this.y = 0;
//             this.speed = 0;
//             this.velocity = Math.random() * 0.5;
//             this.size = Math.random() * 1.5 + 1;
//         }

//         update() {
//             this.y+= this.velocity;
//             if(this.y >= canvas.height){
//                 this.y = 0;
//                 this.x = Math.random() * canvas.width;
//             }
//         }

//         draw(){
//             ctx.beginPath();
//             ctx.fillStyle = 'white';
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.fill();
//         }
//     }

//     function init(){
//         for(let i = 0; i < numberOfParticles; i++){
//             particlesArray.push(new Particle())
//         }
//     }

//     init();
//     function animate(){
//         ctx.globalAlpha = 0.05;
//         ctx.fillStyle = 'rgb(0,0,0)';
//         ctx.fillRect(0,0,canvas.width, canvas.height);

//         for(let i = 0; i < particlesArray.length; i++){
//             particlesArray[i].update();
//             particlesArray[i].draw();
//         }
//         requestAnimationFrame(animate);
//     }
//     animate()
// });
