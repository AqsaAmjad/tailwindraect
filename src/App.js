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
        <div class="lg:w-full lg:bg-center lg:bg-cover lg:bg-fixed">
            <img className="lg:bg-cover" src={require ('./images/imagesfigma/header.jpg').default} /></div>
            <div className="absolute pt-10 px-30 top-10">
                < div className="flex flex-row px-20 ml-28"> 
                <button class="flex lg:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
  </button>   
        <nav className="hidden -mx-4 lg:flex lg:items-center top-16 left-0 sm: top-0 z-20 flex flex-row space-x-4 text-xs text-gray-100 font-thin">
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-700 capitalize">Home</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-700 capitalize">Product</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-700 capitalize">Pricing</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-700 capitalize">About</a>
                    <a href="#"class="block mx-4 mt-2 text-sm text-gray-700 capitalize">Contact</a>
                </nav>
                <img src={require ('./images/imagesfigma/R4.png').default} className="static h-10 ml-8 -mt-3 w-30 " />
                <div className="flex flex-row justify-center ml-40 -mt-2 space-x-4">
                    <FaTwitter className="h-10 text-white"/>
                    <FaFacebookSquare className="h-10 text-white"/>
                    <FaLinkedin className="h-10 text-white"/>
                </div>
            </div>
            <div className="">
            <h1 className="lg:mt-20 font-sans lg:text-4xl font-bold text-white lg:w-80 lg:ml-80">The best products start with Figma</h1>
            <h4 className="lg:mt-5 text-center text-gray-300 lg:px-5 lg:ml-64 lg:w-3/6 lg:m-auto">Most calenders are designed for teams.Slate is designed for freelancers</h4>
            <div className="flex justify-center lg:mt-10 lg:ml-20">
                <button class="bg-blue-500  text-white text-xs lg:py-2 lg:px-8 lg:rounded-full lg:ml-12 lg:mt-10">
                Try For Free
                </button>
                </div>
                </div>
            
    </div>
    </header>
</div>
<div>
<h2 className=" lg:hidden sm:mt-20 text-2xl font-semibold -ml-20">Features</h2>
    <h4 className=" lg:hidden sm: text-sm ml-16 mt-3 text-gray-800 w-40">Most calenders are designd for teams.</h4>
<div className=" lg:hidden sm: ml-8 rounded-full mt-3">
    <iframe width="250" height="190" src="https://www.youtube.com/embed/0L8cQ9nRtuE"frameborder="rounded-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <h2 className="mt-20 text-3xl font-bold text-center">Features</h2>
    <h4 className="mt-5 text-center text-gray-800">Most calenders are designd for teams.</h4>
    <h4 className="text-center text-gray-800">Slate is designed for freelancers.</h4>
</div>
<div className="grid justify-center w-2/3 lg:grid-cols-3 mx-auto">
    <div className="p-5 mt-10">
        <img class="ml-28 -mb-10 w-6 h-6" src={require ('./images/imagesfigma/v.png').default}/>
        <h3 className="p-10 mt-5 text-sm font-bold text-center justify-content-center">OpenType features Variables fonts</h3>
        <p className="p-10 -mt-16 text-sm leading-tight text-center text-gray-600 justify-content-center">Slate helps you see how
            many more days you need
            to work to reach your
            financial goal
        </p>
    </div>
    <div className="p-5 mt-6">
        <img className="sm: -mt-16 w-6 h-6 -mb-5 ml-28" src={require ('./images/imagesfigma/v2.png').default}/>
        <h3 className="p-10 ml-5 text-sm font-bold">Design with real data</h3>
        <p className="p-10 -mt-16 text-sm leading-tight text-center text-gray-600 justify-content-center">Slate helps you see how
            many more days you need
            to work to reach your
            financial goal
        </p>
    </div>
    <div className="p-5 mt-12">
        <img className="sm: -mt-16 w-6 h-6 -mb-20 ml-28" src={require ('./images/imagesfigma/v1.png').default}/>
        <h3 className="sm: w-64 p-20 mt-4 text-sm font-bold">Fastest way to take action</h3>
        <p className="p-10 text-sm leading-tight text-center text-gray-600 -mt-28 justify-content-center" >Slates help you see how many more days you need to work to reach your financial goals.</p>
    </div>
</div>
<div className="ml-80">
    <iframe width="700" height="315" src="https://www.youtube.com/embed/0L8cQ9nRtuE"frameborder="rounded-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div>
    <div className="grid lg:grid-cols-2 mt-40">
        <div className="mt-0 ml-60 w-60">
            <h2 class=" text-3xl font-small ml-20 w-60">Fastest way to organize</h2>
            <h4 className="pr-10 mt-5 ml-20 text-gray-800 w-80 font-small"> Most calendars are designed for teams.  Slate is designed for freelancers</h4>
        </div>
        <div className="ml-10">
            <img class=" h-50 w-80 mr-60" src={require ('./images/imagesfigma/c.png').default}/>
        </div>
    </div>
    <button class="bg-blue-500  text-white text-xs font-bold py-2 px-8 rounded-full -mt-6 ml-80">
    Try For Free
    </button>
</div>
<div className="grid lg:grid-cols-2 mt-40">
    <img className="ml-72 w-50 w-100 h-60" src={require ('./images/imagesfigma/t.png').default}/>
    <div className="ml-10">
        <h3 className="text-xs font-black -ml-96">At your finger tips</h3>
        <h2 className="mt-3 text-3xl w-80">Lightning fast prototyping</h2>
        <h3 className="mt-5 text-xs font-black -ml-80">Subscribe to our Newsletter</h3>
        <p className="text-xs text-gray-600 -ml-80">Available exclusivery on figmaland</p>
        <input type='text' placeholder="Your Email" class=" -ml-64 text-xs mt-4 px-4 py-4 border rounded-full bg-gray-200 h-2 w-40 placeholder-gray-700" />
        <button class="bg-blue-500  text-white text-opacity-80 text-xs py-2 px-4 rounded-full ml-4 mt-5">Subscribe</button>
    </div>
</div>
<div className="text-center">
    <h2 className="mt-20 text-4xl text-black text-opacity-80">Partners</h2>
    <h4 className="mt-5 text-center text-gray-700">Most calenders are designd for teams.</h4>
    <h4 className="text-center text-gray-700">Slate is designed for freelancers.</h4>
    <div className="sm: hidden lg:flex justify-center ">
    <img className="p-8 mt-10 w-82 h-60" src={require ('./images/imagesfigma/item.png').default} /> 
    </div>
    <div>
    <img className="h-32 w-60 ml-8" src={require ('./images/imagesfigma/sm.png').default} /> 
    </div>
    <div className="flex justify-center">
        <button class="bg-blue-500  text-white text-xs font-bold py-2 px-8 rounded-full mt-5">
        Try For Free
        </button>
    </div>
</div>
<div className="mt-20 text-center">
    <h2 className="text-2xl">Testimonials</h2>
    <div className="flex justify-center mt-10">
        <img className="h-6 " src={require ('./images/imagesfigma/logo (1).png').default}  />
    </div>
    <h4 className="justify-center w-2/5 mx-auto mt-10 text-gray-700">Most calenders are designed for teams.Slate is designed for freelancers who want a simple way to plan their schedule</h4>
</div>
<div className="flex justify-center mt-10">
    <img className="float-left h-10 ml-20" src={require ('./images/imagesfigma/logo (2).png').default}  />
    <div className="w-40">
        <h5 className="ml-2 text-xs text-gray-500">Organize across</h5>
        <p className="ml-2 text-xs">Ui designer</p>
    </div>
</div>
<div className="flex justify-center mt-10">
    <button class="bg-blue-500  text-white text-xs font-bold py-2 px-5 rounded-full mt-5">
    More Testimonials
    </button>
</div>
<div className="lg:mt-10 text-center bg-gray-700 sm:flex-shrink-0">
    <h2 className="pt-10 text-4xl text-white">Pricing</h2>
    <h4 className="mt-5 text-center text-white ">Most calenders are designd for teams.</h4>
    <h4 className="text-center text-white">Slate is designed for freelancers.</h4>
    <div className="flex py-10 space-x-10 justify-row ml-80">
        <div className="p-5 text-center transition duration-500 transform bg-white rounded shadow-2xl hover:scale-y-110 w-52 max-h-96 hover:bg-blue-400 group">
            <h4 className="text-xs font-extrabold group-hover:text-white ">FREE</h4>
            <h5 className="w-56 text-xs text-center text-gray-600 -ml-7 px-14 group-hover:text-white">organize across all apps by hand</h5>
            <h5 className="mt-3 -ml-10 text-4xl font-extrabold group-hover:text-white">0</h5>
            <h1 className="ml-0 -mt-8 text-xs font-extrabold group-hover:text-white">$</h1>
            <h2 className= "ml-10 text-xs text-gray-600 group-hover:text-white">Per Month</h2>
            <div className="mt-5 text-xs leading-10 text-center text-gray-600 group-hover:text-white">
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
        <div>
            <div className="p-5 text-center transition duration-500 transform bg-white rounded shadow-2xl hover:scale-y-110 hover:bg-blue-400 w-52 max-h-96 group">
                <h4 className="text-xs font-medium font-extrabold text-black group-hover:text-white ">STANDARD</h4>
                <h5 className="w-56 text-xs text-gray-600 -ml-7 px-14 group-hover:text-white">organize across all apps by hand</h5>
                <h5 className="mt-3 -ml-10 text-4xl font-extrabold text-black group-hover:text-white">10</h5>
                <h1 className="ml-4 -mt-8 text-xs font-extrabold text-black group-hover:text-white">$</h1>
                <h2 className= "ml-16 text-xs text-gray-600 group-hover:text-white">Per Month</h2>
                <div className="mt-5 text-xs leading-10 text-center text-black text-gray-600 group-hover:text-white">
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
        <div className="p-5 text-center transition duration-500 transform bg-white rounded shadow-2xl hover:bg-blue-400 group w-52 max-h-96 hover:scale-y-110 ">
            <h4 className="text-xs font-extrabold group-hover:text-white ">BUSNIESS</h4>
            <h5 className="w-56 text-xs text-gray-600 -ml-7 px-14 group-hover:text-white">organize across all apps by hand</h5>
            <h5 className="mt-3 -ml-10 text-4xl font-extrabold group-hover:text-white">99</h5>
            <h1 className="ml-4 -mt-8 text-xs font-extrabold group-hover:text-white ">$</h1>
            <h2 className= "ml-16 text-xs text-gray-600 group-hover:text-white">Per Month</h2>
            <div className="mt-5 text-xs leading-10 text-center text-gray-600 group-hover:text-white">
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
<h2 className="mt-20 text-3xl text-center">Contact Us</h2>
<h4 className="mt-5 text-center text-opacity-50 ">Most calenders are designd for teams.</h4>
<h4 className="text-center text-opacity-50">Slate is designed for freelancers.</h4>
<div>
    <div className="grid lg:grid-cols-2">
        <div className="p-5 mt-10 border-2 border-gray-100 rounded shadow-lg max-h-96 w-60 ml-80">
            <h4 className="ml-16 text-sm font-bold">Contact Us</h4>
            <input type='text' placeholder="Your Name" class=" placeholder-gray-600 bg-gray-200 text-xs mt-4 px-2 py-4 border rounded-full text-black-200 h-0 w-48 ml-2" />
            <input type='text' placeholder="Your Email" class="placeholder-gray-600 bg-gray-200 text-xs mt-4 px-2 py-4 border rounded-full text-black-200 h-0 w-48 ml-2" />
            <textarea className="w-48 p-1 mt-5 ml-2 text-xs placeholder-gray-600 bg-gray-200 border rounded-md resize h-28" placeholder="Your message"></textarea>
            <button class="bg-blue-500  text-white text-xs font-bold py-2 px-6 mt-4 ml-2 rounded-full">
    Send
    </button>
        </div>
        <div className="flex mt-10 justify-row -ml-9">
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
            <img className="visible-lg-block h-48 mt-24 -ml-96 w-82 mt-28" src={require ('./images/imagesfigma/map.png').default}  />
        </div>
    </div>
</div>
<div className="flex justify-center -mt-8 -ml-10 space-x-3 justify-row">
    <FaTwitter className="h-10 text-blue-400"/>
    <FaFacebookSquare className="h-10 text-blue-400"/>
    <FaLinkedin className="h-10 text-blue-400"/>
</div>

<footer className="max-w-full pt-10 pb-10 mt-10 bg-gray-700">
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
            <p className="sm:flex flex-row lg:flex flex-row mt-5 space-x-2">
            <Icon icon="location-marker" className="sm:flex flex-row  lg:w-5 h-15"/>
                <span className=" text-xs text-white text-opacity-50">7480 Mockingbird Hiii undefined</span>
            </p>
            <p className="sm:flex flex-row lg:flex flex-row pt-4 space-x-2">
                <FaMobileAlt className="sm:flex flex-row lg:w-5 h-5"/>
                <span className=" text-xs text-white text-opacity-50">(239) 555-0108</span>
            </p>
            <div className="sm:flex flex-row sm:space-x-1 lg:flex flex-row pt-5 space-x-3">
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
