import './App.css';
import './style/index.css'
import { Twirl as Hamburger } from 'hamburger-react'
import Icon from "react-hero-icon";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

function App() {
  return (
    <div className="App">
      <div className="relative">
        
        <header className="lg:px-32 lg:pt-8  lg:flex flex-wrap flex-row justify-between lg:items-center lg:space-x-4 bg-white py-6 px-6 ">
        <div class="lg:w-screen lg:bg-center lg:bg-cover lg:bg-fixed">
            <img className="lg:visible sm: invisible lg:bg-cover sm: backdrop-filter sm: backdrop-blur-none" src={require ('./images/imagesfigma/header.jpg').default} />
            <img className="lg:invisible sm: visible sm: -mt-20 lg:bg-cover sm: h-96 sm: w-96 sm: backdrop-filter sm: backdrop-blur-none" src={require ('./images/imagesfigma/header.jpg').default} />
            
            </div>
            <div className="absolute pt-10 px-30 top-10">
                < div className="lg:flex flex-row px-20 ml-28"> 
    
        <nav className=" lg:visible sm: invisible -mx-4 flex items-center top-16 left-0 sm: top-0 z-20 flex flex-row space-x-4 text-xs text-gray-400 font-thin">
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-300 capitalize">Home</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-300 capitalize">Product</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-300 capitalize">Pricing</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-300 capitalize">About</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-300 capitalize">Contact</a>
                </nav>
                <div className="sm: flex flex-row sm: space-x-28 sm: -mt-14">
                <img src={require ('./images/imagesfigma/R4.png').default} className="h-10 lg:ml-8 lg:mt-6 w-30 sm: -ml-10 sm: -mt-2 sm: -ml-40 sm: backdrop-filter backdrop-blur-none" />
                
                <button class="flex lg:hidden w-8 h-8  text-gray-300 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
  </button>
  </div>
   
                <div className="hidden lg:flex flex-row justify-center ml-40 -mt-2 space-x-4">
                    <FaTwitter className="h-10 text-white"/>
                    <FaFacebookSquare className="h-10 text-white"/>
                    <FaLinkedin className="h-10 text-white"/>
                </div>
            </div>
            <div className="">
            <h1 className=" lg:visible lg:mt-20 font-sans lg:text-4xl lg:font-bold lg:text-white lg:w-80 lg:ml-96 sm: w-40 sm: font-normal sm: text-2xl sm: text-gray-300 sm: ml-20 sm: mt-9">The best products start with Figma</h1>
            <h4 className="lg:invisible sm: visible sm: text-gray-400 sm: text-base sm: w-44 sm: ml-20 sm: mt-2 sm: leading-tight">Most calenders are designed for teams.</h4>
            <h4 className=" lg:visible sm: invisible lg:-mt-7 text-center text-gray-300 lg:px-5 lg:ml-72 lg:w-3/6 lg:m-auto lg:ml-4">Most calenders are designed for teams.Slate is designed for freelancers</h4>
            <div className="flex justify-center lg:mt-10 lg:ml-20">
                <button class="bg-blue-500  text-white text-xs lg:py-2 lg:px-8 rounded-full lg:ml-12 lg:mt-10 sm: px-7 sm: text-xs sm: font-thin sm: py-1 sm: mt-7 sm: -ml-52">
                Try For Free
                </button>
                </div>
                </div>
            
    </div>
    </header>
</div>
<div>
<h2 className=" lg:hidden sm: mt-10 sm: text-3xl sm: font-normal sm: -ml-0">Features</h2>
    <h4 className=" lg:hidden sm: text-sm sm: ml-28 sm: mt-3 sm: text-gray-800  sm: tracking-wider sm: w-40">Most calenders are designd for teams.</h4>
<div className=" lg:hidden sm: ml-3 sm: mt-12">
    <iframe width="350" height="190" src="https://www.youtube.com/embed/0L8cQ9nRtuE"frameborder="rounded-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <h2 className="lg:visible sm: invisible lg:mt-20 lg:text-3xl lg:font-bold lg:text-center">Features</h2>
    <h4 className="lg:visible sm: invisible lg:mt-5 lg:text-center lg:text-gray-800">Most calenders are designd for teams.</h4>
    <h4 className="lg:visible sm: invisible lg:text-center lg:text-gray-800">Slate is designed for freelancers.</h4>
</div>
<div className="grid justify-center w-2/3 lg:grid-cols-3 mx-auto">
    <div className="p-5 lg:mt-10 sm: -mt-7">
        <img class="ml-28 -mb-10 w-6 h-6" src={require ('./images/imagesfigma/v.png').default}/>
        <h3 className="p-10 mt-5 text-sm font-bold text-center justify-content-center">OpenType features Variables fonts</h3>
        <p className="p-10 -mt-16 text-sm leading-tight text-center text-gray-600 justify-content-center">Slate helps you see how
            many more days you need
            to work to reach your
            financial goal
        </p>
    </div>
    <div className="p-5 lg:mt-24 sm: mt-10">
        <img className="sm: -mt-16 w-6 h-6 -mb-5 ml-28" src={require ('./images/imagesfigma/v2.png').default}/>
        <h3 className="p-10 ml-5 text-sm font-bold">Design with real data</h3>
        <p className="p-10 -mt-16 text-sm leading-tight text-center text-gray-600 justify-content-center">Slate helps you see how
            many more days you need
            to work to reach your
            financial goal
        </p>
    </div>
    <div className="p-5 lg:mt-24 sm: mt-10">
        <img className="sm: -mt-16 w-6 h-6 -mb-20 ml-28" src={require ('./images/imagesfigma/v1.png').default}/>
        <h3 className="sm: w-64 p-20 mt-4 text-sm font-bold">Fastest way to take action</h3>
        <p className="p-10 text-sm leading-tight text-center text-gray-600 -mt-28 justify-content-center" >Slates help you see how many more days you need to work to reach your financial goals.</p>
    </div>
</div>
<div className="lg:visible sm: invisible lg:ml-80">
    <iframe width="700" height="315" src="https://www.youtube.com/embed/0L8cQ9nRtuE"frameborder="rounded-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
    <div className="grid lg:grid-cols-2 lg:mt-40 sm: -mt-96 sm: ml-2">
        <div className="mt-0 lg:ml-60 w-60 lg:-mt-8">
            <h2 class="lg:visible sm: invisible text-3xl font-small lg:ml-9 lg:w-60">Fastest way to</h2>
            <h2 className="lg:visible sm: invisible lg:visible text-3xl font-small lg:-ml-10">Organize</h2>
            <h2 className="lg:invisible sm: visible text-4xl sm: text-center sm: ml-24">Fastest way to organize</h2>
            <h4 className=" lg:invisible sm: visible sm: w-40 sm: ml-24 sm: mt-5">Most calenders are designed for teams.</h4>
            <button class="lg:invisible sm: visible sm: bg-blue-500 sm: rounded-full sm: px-7 sm: py-1 sm: text-xs sm: text-white sm: mt-8 sm: ml-28">
    Try For Free
    </button>
            <h4 className="sm: invisible lg:visible lg:pr-10 lg:-mt-36 lg:ml-6 lg:text-gray-800 lg:w-80 lg:text-sm"> Most calendars are designed for teams.</h4>
            <h4 className="sm: invisible lg:visible lg:text-gray-800 lg:text-sm ml-10 ">Slate is designed for freelancers.</h4>
        </div>
        <div className="lg:ml-10 sm: ml-10 sm: mt-9 lg:-mt-5 sm: -mt-16">
            <img class=" h-50 lg:w-80 lg:mr-60 sm: w-64 " src={require ('./images/imagesfigma/c.png').default}/>
        </div>
    </div>
    <div className="flex justify-start lg:ml-72 lg:mt-10 ">
    <button class="sm: invisible lg:visible lg:bg-blue-500  lg:text-white lg:text-xs font-bold lg:py-1 lg:px-10 rounded-full lg:-mt-12 lg:h-8 ">
    Try For Free
    </button></div>
</div>
<div className="lg:invisible sm: visible grid grid-col-1 sm: mt-20">
<h3 className="text-xs font-black font-extrabold">At your finger tips</h3>
<h4 className="text-3xl text-gray-700">Newsletter</h4>
<h4 className="text-gray-800 text-sm">Most calenders are designed for teams</h4>
<h4 className="text-gray-800 text-sm">Slate is designed for freelancers</h4>
<img className="w-50 h-60 mt-10 -ml-5" src={require ('./images/imagesfigma/t.png').default}/>
</div>
<div className="invisible lg:visible grid grid-cols-2 mt-40">
    <img className="ml-44 w-50 w-100 h-60 -mt-6" src={require ('./images/imagesfigma/t.png').default}/>
    <div className="ml-10">
        <h3 className="text-xs font-black font-extrabold -ml-96">At your finger tips</h3>
        <h2 className="mt-1 text-3xl w-80 -ml-6 ">Lightning fast</h2>
        <h2 className="-ml-96 text-3xl ">prototyping</h2>
        <h3 className="mt-5 text-xs font-black -ml-96">Subscribe to our Newsletter</h3>
        <p className="text-xs text-gray-600 -ml-96">Available exclusivery on figmaland</p>
        <input type='text' placeholder="Your Email" class="-ml-80 text-xs mt-4 px-4 py-4 border rounded-full bg-gray-200 h-2 w-40 placeholder-gray-700" />
        <button class="bg-blue-500  text-white text-opacity-80 text-xs py-2 px-4 rounded-full ml-4 mt-5">Subscribe</button>
    </div>
</div>
<div className="text-center">
    <h2 className="lg:mt-20 text-4xl text-black text-opacity-80 sm: -mt-64">Partners</h2>
    <h4 className="lg:mt-5 text-center text-gray-800 sm: mt-4">Most calenders are designd for teams.</h4>
    <h4 className="text-center text-gray-800">Slate is designed for freelancers.</h4>
    <div className="sm: hidden lg:flex justify-center ">
    <img className="p-8 mt-10 w-82 h-60" src={require ('./images/imagesfigma/item.png').default} /> 
    </div>
    <div>
    <img className="lg:invisible sm: visible h-32 w-60 ml-16 mt-5" src={require ('./images/imagesfigma/sm.png').default} />
    <img className="lg:invisible sm: visible h-32 w-60 ml-16 mt-4" src={require ('./images/imagesfigma/sm2.png').default} />
    <img className="lg:invisible sm: visible h-32 w-60 ml-16 mt-4" src={require ('./images/imagesfigma/sm3.png').default} /> 
    </div>
    <div className="flex justify-center justify-start lg:-mt-96">
        <button class="bg-blue-500  text-white text-xs font-bold lg:py-2 lg:px-8 rounded-full lg:mt-5 sm: mt-14 sm: px-12 py-4">
        Try For Free
        </button>
    </div>
</div>
<div className="mt-20 text-center">
    <h2 className="text-2xl">Testimonials</h2>
    <div className="flex justify-center mt-10">
        <img className="h-6 " src={require ('./images/imagesfigma/logo (1).png').default}  />
    </div>
    <h4 className="justify-center lg:w-2/5 mx-auto mt-10 text-gray-700 sm: w-60 sm: text-black sm: text-opacity-100 sm: text-xs">Most calenders are designed for teams.Slate is designed for freelancers who want a simple way to plan their schedule</h4>
</div>
<div className="flex justify-center mt-10">
    <img className="float-left h-10 lg:ml-20 sm: ml-28" src={require ('./images/imagesfigma/logo (2).png').default}  />
    <div className="w-40">
        <h5 className="lg:-ml-14 text-xs lg:text-gray-500 sm: -ml-16 sm: text-black">Organize across</h5>
        <p className="lg:-ml-20 text-xs sm: -ml-20 sm: text-black">Ui designer</p>
    </div>
</div>
<div className="flex justify-center mt-10">
    <button class="bg-blue-500  text-white text-xs font-bold lg:py-2 lg:px-5 rounded-full mt-5 sm: px-6 sm: py-3">
    More Testimonials
    </button>
</div>
<div className="lg:mt-10 text-center bg-gray-700 sm:flex-shrink-0 sm: mt-10">
    <h2 className="pt-10 text-4xl text-white">Pricing</h2>
    <h4 className="lg:invisible sm: visible lg:mt-5  sm: text-center text-white sm: mt-4 w-36 sm: ml-28 lg: ">Most calenders are designd for teams.</h4>
    <h4 className="lg:visible sm: invisible lg:text-center lg:text-white lg:-mt-10">Most calenders are designed for teams.</h4>
    <h4 className="lg:visible  sm: invisible lg: text-center lg: text-white">Slate is designed for freelancers.</h4>
    <div className="lg:flex lg:py-10 lg:space-x-10 lg:justify-row lg:ml-80 sm: ml-20 sm: -mt-1">
        <div className="p-5 text-center transition duration-500 transform bg-white rounded shadow-2xl lg:hover:scale-y-110 w-52 lg:max-h-96 hover:bg-blue-400 group">
            <h4 className="text-xs font-extrabold group-hover:text-white ">FREE</h4>
            <h5 className="w-56 text-xs text-center text-gray-600 -ml-7 px-14 group-hover:text-white">organize across all apps by hand</h5>
            <h5 className="mt-3 -ml-10 text-4xl font-extrabold group-hover:text-white">0</h5>
            <h1 className="ml-0 -mt-8 text-xs font-extrabold group-hover:text-white">$</h1>
            <h2 className= "ml-10 text-xs text-gray-600 group-hover:text-white">Per Month</h2>
            <div className="lg:mt-5 text-xs leading-10 text-center text-gray-600 group-hover:text-white sm: mt-4">
                <ul>
                    <li>pricing Features</li>
                </ul>
                <ul>
                    <li>pricing Features</li>
                </ul>
                <ul>
                    <li>pricing Features</li>
                </ul>
                <ul>
                    <li>pricing Features</li>
                </ul>
            </div>
            <button class="group group-hover:bg-white group-hover:text-blue-400 bg-blue-500  text-white text-xs font-bold py-2 px-10 rounded-full ml-0 mt-2">Order Now</button>
        </div>
        <div className="">
            <div className="p-5 text-center transition duration-500 transform bg-white rounded shadow-2xl lg:hover:scale-y-110 hover:bg-blue-400 w-52 max-h-96 group sm: mt-2">
                <h4 className="text-xs font-medium font-extrabold text-black group-hover:text-white ">STANDARD</h4>
                <h5 className="w-56 text-xs text-gray-600 -ml-7 px-14 group-hover:text-white">organize across all apps by hand</h5>
                <h5 className="mt-3 -ml-10 text-4xl font-extrabold text-black group-hover:text-white">10</h5>
                <h1 className="ml-4 -mt-8 text-xs font-extrabold text-black group-hover:text-white">$</h1>
                <h2 className= "ml-16 text-xs text-gray-600 group-hover:text-white">Per Month</h2>
                <div className="lg:mt-5 text-xs leading-10 text-center text-black text-gray-600 group-hover:text-white sm: mt-4">
                    <ul>
                        <li>pricing Features</li>
                    </ul>
                    <ul>
                        <li>pricing Features</li>
                    </ul>
                    <ul>
                        <li>pricing Features</li>
                    </ul>
                    <ul>
                        <li>pricing Features</li>
                    </ul>
                </div>
                <button class="bg-blue-500  text-white text-xs font-bold py-2 px-10 rounded-full ml-0 mt-2 group group-hover:bg-white group-hover:text-blue-400 ">Order Now</button>
            </div>
        </div>
        <div className="p-5 text-center transition duration-500 transform bg-white rounded shadow-2xl hover:bg-blue-400 group w-52 max-h-96 lg:hover:scale-y-110 sm: mt-4 ">
            <h4 className="text-xs font-extrabold group-hover:text-white ">BUSNIESS</h4>
            <h5 className="w-56 text-xs text-gray-600 -ml-7 px-14 group-hover:text-white">organize across all apps by hand</h5>
            <h5 className="mt-3 -ml-10 text-4xl font-extrabold group-hover:text-white">99</h5>
            <h1 className="ml-4 -mt-8 text-xs font-extrabold group-hover:text-white ">$</h1>
            <h2 className= "ml-16 text-xs text-gray-600 group-hover:text-white">Per Month</h2>
            <div className="lg:mt-5 text-xs leading-10 text-center text-gray-600 group-hover:text-white sm: mt-4">
                <ul>
                    <li>pricing Features</li>
                </ul>
                <ul>
                    <li>pricing Features</li>
                </ul>
                <ul>
                    <li>pricing Features</li>
                </ul>
                <ul>
                    <li>pricing Features</li>
                </ul>
            </div>
            <button class="group group-hover:bg-white group-hover:text-blue-400 bg-blue-500  text-white text-xs font-bold py-2 px-10 rounded-full ml-0 mt-2">Order Now</button>
        </div>
    </div>
</div>
<h2 className="sm: visible sm: mt-20 sm: text-3xl sm: text-center">Contact Us</h2>
<h4 className="lg:visible sm: invisible text-center mt-4 lg:text-gray-700">Most calenders are designed for teams</h4>
<h4 className="lg:visible sm: invisible text-center lg:text-gray-700">Slate is designed for freelancers</h4>
<h4 className="lg:invisible sm: visible sm: mt-5 sm: text-center sm: text-opacity-50 sm: w-40 sm: ml-28">Most calenders are designd for teams.</h4>
<div className="sm: flex sm: justify-center  sm: justify-row sm: space-x-6 sm: mt-4 ">
    <FaTwitter className="lg:invisible sm: visible sm: h-10 sm: text-blue-400"/>
    <FaFacebookSquare className="lg:invisible sm: visible sm: h-10 sm: text-blue-400"/>
    <FaLinkedin className="lg:invisible sm: visible sm: h-10 sm: text-blue-400"/>
</div>
<div className="lg:invisible sm: visible">
 <h5 className="text-xs text-gray-600 w-52">
     <div className="flex flex-row">
                <Icon icon="location-marker" className="w-5 lg:mb-3 lg:ml-24 text-blue-400 h-15 sm: ml-2 sm: mt-5 sm: w-20"/>
                <p className="w-72 -ml-2 mt-5">6386 St undefined Anchorage,Georgia 123473 </p>
        </div>
                <span className="sm: invisible inline-block text-center">6386 St undefined Anchorage,Georgia 123473 United states</span>
            </h5>
            <div className="flex flex-row">
            <h5 className="w-20 ml-2 text-xs text-gray-600">
                <FaMobileAlt className="w-5 h-5 mb-4 lg:ml-6 text-blue-400 ml-4 -mt-4 "/>
                <p className="ml-14 -mt-9">(843)555-0130</p>
            </h5></div>
            <div>
            <h5 className="ml-2 text-xs text-gray-600">
                <Icon icon="mail" className="w-5 mb-3 lg:ml-12 text-blue-400 h-15 sm: mt-7 sm: ml-4 sm: w-6"/>
               <p className="-ml-36 -mt-8"> willie.jenning@example</p>
            </h5></div>
            </div>
<h4 className="sm: invisible text-center text-opacity-50">Slate is designed for freelancers.</h4>
<div>
    <div className="grid lg:grid-cols-2 lg:-mt-72">
        
        <div className="p-5 mt-10 border-2 border-gray-100 rounded shadow-lg max-h-96 w-60 lg:ml-80 sm: ml-16">
            <h4 className="text-sm font-bold">Contact Us</h4>
            <input type='text' placeholder="Your Name" class=" placeholder-gray-600 bg-gray-200 text-xs mt-4 px-2 py-4 border rounded-full text-black-200 h-0 w-48 ml-2" />
            <input type='text' placeholder="Your Email" class="placeholder-gray-600 bg-gray-200 text-xs mt-4 px-2 py-4 border rounded-full text-black-200 h-0 w-48 ml-2" />
            <textarea className="w-48 p-1 mt-5 ml-2 text-xs placeholder-gray-600 bg-gray-200 border rounded-md resize h-28" placeholder="Your message"></textarea>
            <button class="bg-blue-500  text-white text-xs font-bold py-2 px-6 mt-4 ml-2 rounded-full">
    Send
    </button>
        </div>
        <div className="lg:visible sm: invisible flex mt-10 justify-row -ml-9">
            <h5 className="text-xs text-gray-600 w-52">
                <Icon icon="location-marker" className="w-5 mb-3 ml-24 text-blue-400 h-15"/>
                <span className="inline-block text-center">6386 St undefined Anchorage,Georgia 123473 United states</span>
            </h5>
            <h5 className="w-20 ml-2 text-xs text-gray-600">
                <FaMobileAlt className="w-5 h-5 mb-4 ml-6 text-blue-400"/>
                (843)555-0130
            </h5>
            <h5 className="ml-2 text-xs text-gray-600">
                <Icon icon="mail" className="w-5 mb-3 ml-12 text-blue-400 h-15"/>
                willie.jenning@example
            </h5>
            <img className="lg:visible sm: invisible h-48 mt-24 -ml-96 w-82 mt-28" src={require ('./images/imagesfigma/map.png').default}  />
        </div>
    </div>
</div>
<div className="lg:visible sm: invisible flex justify-center -mt-8 -ml-10 space-x-3 justify-row">
    <FaTwitter className="h-10 text-blue-400"/>
    <FaFacebookSquare className="h-10 text-blue-400"/>
    <FaLinkedin className="h-10 text-blue-400"/>
</div>

<footer className="max-w-full pt-10 pb-10 lg:mt-10 bg-gray-700 sm: -mt-60">
    <div className="container grid content-center w-4/5 sm:grid-col-1 lg:grid-cols-4 mx-auto text-white">
        <div className=" mt-5 ml-8 ">
            <h4>Pages</h4>
            <ul>
                <li className="pt-5 pb-3 text-xs text-white text-opacity-50">Home</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Product</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Pricing</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">About</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Contact</li>
            </ul>
        </div>
        <div>
            <h4 className="mt-5 ml-2">Tomothly</h4>
            <ul>
                <li className="pt-5 pb-3 text-xs text-white text-opacity-50">Eleanor Edwards</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Ted Robertson</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Annete Russell</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Jennia Mckinney</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Gloria Richards</li>
            </ul>
        </div>
        <div >
            <h4 className="mt-5 ml-0">Jane Black</h4>
            <ul>
                <li className="pt-5 pb-3 text-xs text-white text-opacity-50">phillip Jones</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Product</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Collean Russall</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Marvin Hawkins</li>
            </ul>
            <ul>
                <li className="pb-3 text-xs text-white text-opacity-50">Bruce Slimmons</li>
            </ul>
        </div>
        <div className="">
            <p className="sm: flex flex-row lg:flex flex-row lg:mt-5 lg:space-x-2 sm: space-x-4">
            <Icon icon="location-marker" className="sm:flex flex-row  lg:w-5 h-15 sm: mt-5"/>
                <span className=" text-xs text-white text-opacity-50 sm: mt-7">7480 Mockingbird Hiii undefined</span>
            </p>
            <p className="sm: flex flex-row lg:flex flex-row pt-4 lg:space-x-2 sm: space-x-4">
                <FaMobileAlt className="sm:flex flex-row lg:w-5 h-5"/>
                <span className=" text-xs text-white text-opacity-50">(239) 555-0108</span>
            </p>
            <div className="sm: flex flex-row sm:space-x-1 lg:flex flex-row pt-5 lg:space-x-3 sm: ml-9 sm: space-x-8 ">
                <FaTwitter className="h-5 text-white"/>
                <FaFacebookSquare className="h-5 text-white "/>
                <FaLinkedin className="h-5 text-white"/>
            </div>
        </div>
    </div>
</footer>
      
    </div>
  );
}

export default App;
