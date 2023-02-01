import logo from './logo.svg';
import './App.css';
import pic from './backwardsarrow.png'
import ava from './avatarbig.png'
import headerLogo from './infotop_Logo.png'
import news from './news_Img.png'
import likesCount from './likescount.png'
import newsFrame from './news_Frame 1.png'
import newsBookmark from './news_Bookmark.png'

function App() {
  return (
    <div className="App">
      <h2 class="header">medium alike</h2>
      <img class="backwards" src={pic}/>
      <div id="news">
        <div class="frame23">
          <div class="info-header">
            <img class="avatarbig" src={ava}/>
            <div class="info">
              <p class="header-author">Authors Name</p>
              <p class="header-info">7 July &nbsp; · &nbsp; 12 min read &nbsp; · &nbsp; Member-only</p>
            </div>
          </div>
          <img class="header-logo" src={headerLogo}/>
        </div>
        <div class="news">
          <p id="title"> 7 Practical CSS Tips</p>
          <p id="description"> How product designers can break from the status quo and help our planet </p>
        </div>
        <img src={news}/>
        <div style = {{
          marginTop: "70px"

        }}>
          <p class="bodyNews"> How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a 
news feed or social media' as the needed stimulant to push you out from under the covers. Or maybe you wait to 
open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might stay you
never signed off in the first place. </p> 
          <p class="bodyNews"> And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with 
family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the 
world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as 
the natural gas heating your shower water or the electricity powering your coffee maker. </p>
          <p class="bodyNews"> But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an 
internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and 
access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes 
connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 
20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports 
livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, 
websites, and services that we build will place an even greater strain on our already-overloaded power grids.
          </p>
        </div>
        <div class="infoBottom">
          <div class="news-footer">
            <img class="news-footer-1" src={likesCount}/>
            <img class="news-footer-2" src={newsFrame}/>
          </div>
          <img class="news-footer-bookmark" src={newsBookmark}/>
        </div>   
      </div>
      <div>
        <p class="credits">Credits: photos from&nbsp;<a href="unsplash.com" target="_blank">Unsplash.com</a>, icons
        from&nbsp; <a href="https://icons8.com/" target="_blank">Icons8</a>,graphics from&nbsp;<a href="https://craftwork.design/" target="_blank">craftwork.design</a>, font Kanit from&nbsp;<a href="https://fonts.google.com/" target="_blank">fonts.google</a>.</p>
        <div class="end-footer">Made with ✨❤️ at nFactorial in 2022.</div>
      </div>
    </div>
  );
}

export default App;
