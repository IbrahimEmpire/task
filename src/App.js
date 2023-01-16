
import './App.css';

export default function App() {
  return(
<Card />
)
}
function Card(){
  return(
    <div className='Total'>
      <div className='cards'>
      <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">FREE</h5>
            <h6 class="card-price text-center">$0<span className='month'>/month</span></h6>
            <h3>----------------------------------------------</h3>
            <div className='content'>
            <ul class="fa-ul">
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            </div>
            
              <div type="click" className='btn'><button className='btn2'>Button</button></div>
            
          </div>
        </div>
        <div className='cards'>
      <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">PLUS</h5>
            <h6 class="card-price text-center">$9<span className='month'>/month</span></h6>
            <h3>----------------------------------------------</h3>
            <div className='content'>
            <ul class="fa-ul">
              <li><span class="fa-lii"><i class="fas fa-check"></i></span><b>5 User</b></li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            </div>
            
              <div type="click" className='btn'><button className='btn2'>Button</button></div>
            
          </div>
        </div>
        <div className='cards'>
      <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">PRO</h5>
            <h6 class="card-price text-center">$49<span className='month'>/month</span></h6>
            <h3>----------------------------------------------</h3>
            <div className='content'>
            <ul class="fa-ul">
              <li><span class="fa-lii"><i class="fas fa-check"></i></span><b>Unlimited User</b></li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-lii"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span><b>Unlimited</b> Free Subdomain
              </li>
              <li><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            </div>
            
              <div type="click" className='btn'><button className='btn2'>Button</button></div>
            
          </div>
        </div>
       
      </div>

  
  )
}
