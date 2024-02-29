const navegacion=document.querySelector('#navegacion');

const crearNavHome=()=>{

navegacion.innerHTML=`  
 <p class="text-white text-2xl font-bold">Restaurante App</p>

<div class="hidden md:flex flex-row gap-4">
    <a class="text-white text-2xl px-2" href="/login">login</a>
    <a class="text-white text-2xl" href="/registro">registro</a>
</div>

<div class="md:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    class="w-10 h-10 text-white cursor-pointer p-2 rounded-lg hover:bg-blue-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
</div>
`}

const crearNavlogin=()=>{

  navegacion.innerHTML=`  
   <p class="text-white text-2xl font-bold">Restaurante App</p>
  
  <div class="hidden md:block">
      <a class="text-white text-2xl" href="/registro">Registro</a>
  </div>
  
  <div class="block md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-10 h-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
  </div>
  `} 

  const crearNavRegistro=()=>{

    navegacion.innerHTML=`  
     <p class="text-white text-2xl font-bold">Restaurante App</p>
    
    <div class="hidden md:block">
        <a class="text-white text-2xl" href="/login">login</a>
    </div>
    
    <div class="block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
    </div>
    `} 

//agregar rutas para los componets 

if(window.location.pathname === '/'){
  crearNavHome();
}else if(window.location.pathname==='/login/'){
  crearNavlogin();
}else if(window.location.pathname==="/registro/"){
  crearNavRegistro();
}

//menu para movil