const canvs = document.getElementById('canvas');
canvs.height = window.innerHeight;
canvs.width = 200;

const ctx = canvs.getContext('2d');
const car = new Car(100, 100, 30, 50); // Car is not car
car.draw(ctx);

animate();

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvs.width, canvs.height);
    car.update();
    car.draw(ctx);
}
