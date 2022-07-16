function draw() {
    const canvas = document.getElementById('payilagam');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(0, 0, 100)';
      ctx.fillRect(100, 40, 800, 400);

      ctx.fillStyle = 'white';
      ctx.fillRect(100, 40, 400, 200);

      ctx.fillStyle = 'brown';
      ctx.fillRect(280, 40, 40, 200);

      ctx.fillStyle = 'brown';
      ctx.fillRect(100, 120, 400, 40);

      ctx.beginPath(); // start
      ctx.moveTo(330, 40);
      ctx.lineTo(460, 40);
  
      ctx.lineTo(330, 100);

      ctx.fillStyle = 'rgb(0, 0, 100)';
	  ctx.fill();
      ctx.closePath(); // end
      
      
      
      ctx.beginPath(); // start
      ctx.moveTo(400, 110);
      ctx.lineTo(500, 110);
      
      
      ctx.lineTo(500,60);

      ctx.fillStyle = 'rgb(0, 0, 100)';
	    ctx.fill();
      ctx.closePath(); // end
      
      ctx.beginPath(); // start
      ctx.moveTo(356, 110);
      ctx.lineTo(378, 100);
      
      ctx.lineTo(500,40);
	  
      ctx.lineTo(478,40);
	 
      ctx.lineTo(332,110);
	
      ctx.fillStyle = 'brown';
	  ctx.fill();
      
     
    ctx.beginPath(); // start
    ctx.moveTo(100, 110);
    ctx.lineTo(190,110);
    
    
    ctx.lineTo(100,70);
    
    ctx.fillStyle = 'rgb(0, 0, 100)';
    ctx.fill();
    ctx.closePath(); // end
     
    ctx.beginPath();
    ctx.moveTo(100, 40);
    ctx.lineTo(100, 55);
    
    ctx.lineTo(210,110)
   
    ctx.lineTo(240,110)
    
    ctx.lineTo(100,40)
    
    ctx.fillStyle = 'brown';
	  ctx.fill();
      
    ctx.beginPath(); // start
    ctx.moveTo(270, 40);
    ctx.lineTo(150, 40);
    
    
    ctx.lineTo(270, 105);
    
    ctx.fillStyle = 'rgb(0, 0, 100)';
    ctx.fill();
    ctx.closePath(); // end

    ctx.beginPath(); // start
    ctx.moveTo(100, 170);
    ctx.lineTo(100, 210);
    
  
    ctx.lineTo(190, 170);
    
    ctx.fillStyle = 'rgb(0, 0, 100)';
    ctx.fill();
    ctx.closePath(); // end

    ctx.beginPath(); // start
    ctx.moveTo(150, 240);
    ctx.lineTo(270, 240);
    
    
    ctx.lineTo(270, 180);
    
    ctx.fillStyle = 'rgb(0, 0, 100)';
    ctx.fill();
    ctx.closePath(); // end

    ctx.beginPath();
    ctx.moveTo(100, 240);
    ctx.lineTo(130, 240);
    
    ctx.lineTo(270,170)
  
    ctx.lineTo(240,170)
   
    ctx.lineTo(100,240)
    
    ctx.fillStyle = 'brown';
	  ctx.fill();

    ctx.beginPath(); // start
    ctx.moveTo(330, 240);
    ctx.lineTo(450, 240);
    
    
    ctx.lineTo(330, 180);
    
    ctx.fillStyle = 'rgb(0, 0, 100)';
    ctx.fill();
    ctx.closePath(); // end

    ctx.beginPath(); // start
    ctx.moveTo(500, 170);
    ctx.lineTo(500, 210);
    
    ctx.lineTo(420, 170);
    
    ctx.fillStyle = 'rgb(0, 0, 100)';
    ctx.fill();
    ctx.closePath(); // end

    ctx.beginPath();
    ctx.moveTo(500, 240);
    ctx.lineTo(500, 220);
    
    ctx.lineTo(400,170)
  
    ctx.lineTo(370,170)
   
    ctx.lineTo(500,240)
    
    ctx.fillStyle = 'brown';
	  ctx.fill();

  }
  }